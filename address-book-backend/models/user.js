var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    tele: {
        type: String,
        default: "NIL"
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "no image"
    }
}, { timestamps: true });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);