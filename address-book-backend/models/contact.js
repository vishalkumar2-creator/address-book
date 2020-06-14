var mongoose = require('mongoose');
const arrayUniquePlugin = require('mongoose-unique-array');
const uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var contactSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    contacts: [
        {
            firstname: {
                type: String,
                default: ""
            },
            lastname: {
                type: String,
                default: "",
            },
            username: {
                type: String,
                required: true,
                unique: true
            },
            emailid: {
                type: String,
                default: ""
            },
            phone: {
                type: String,
                default: ""
            },
            tele: {
                type: String,
                default: "NIL"
            },
            address: {
                type: String,
                default: ""
            },
            description: {
                type: String,
                default: ""
            },
            image: {
                type: String,
                default: "no image"
            }
        }]
}, { timestamps: true });
contactSchema.plugin(arrayUniquePlugin);

var Contacts = mongoose.model('Contact', contactSchema);

module.exports = Contacts;