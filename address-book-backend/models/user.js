var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        default:""
    },
    lastname: {
        type: String,
        default:""
    },
    emailid: {
        type: String,
        default:""
    },
    phone: {
        type: String,
        default:""
    },
    tele: {
        type: String,
        default: "NIL"
    },
    address: {
        type: String,
        default:""
    },
    description: {
        type: String,
        default:""
    },
    image: {
        type: String,
        default: "no image"
    }
}, { timestamps: true });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);