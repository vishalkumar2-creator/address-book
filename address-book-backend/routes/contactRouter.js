const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

const Contacts = require('../models/contact');

const contactRouter = express.Router();

contactRouter.use(bodyParser.json());

contactRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Contacts.findOne({ user: req.user._id }).sort({ 'contacts.username': 1 })
            .then((contacts) => {
                if (contacts) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(contacts);
                }
                else {
                    Contacts.create({ user: req.user._id })
                        .then((contacts) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(contacts);
                        }, (err) => next(err)).catch((err) => next(err));
                }
            }, (err) => next(err)).catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        var contactDetails = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            emailid: req.body.emailid,
            phone: req.body.phone,
            tele: req.body.tele,
            address: req.body.address,
            description: req.body.description,
            image: req.body.image
        }
        Contacts.findOneAndUpdate({ user: req.user._id }, {
            $addToSet: { contacts: contactDetails }
        }, {
            new: true,
            upsert: true,
            sort: { 'contacts.username': 1 }
        })
            .then((contact) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ sucess: true });
            }, (err) => next(err)).catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Contacts.findOneAndUpdate({ user: req.user._id, "contacts._id": req.body._id },
            {
                $set: {
                    'contacts.$.firstname': req.body.firstname,
                    'contacts.$.lastname': req.body.lastname,
                    'contacts.$.emailid': req.body.emailid,
                    'contacts.$.phone': req.body.phone,
                    'contacts.$.tele': req.body.tele,
                    'contacts.$.description': req.body.description,
                    'contacts.$.address': req.body.address,
                    'contacts.$.image': 'no image'
                }
            }
            ,
            {
                new: true
            }
        )
            .then((contacts) => {
                res.sendStatus = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ success: true })
            }, (err) => nex(err)).catch((err) => next(err));
    })

module.exports = contactRouter;