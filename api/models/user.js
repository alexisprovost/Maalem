const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema & model
const Userschema = new Schema({
    googleid: {
        type: String
    },
    balance: {
        type: Number
    },
    displayname: {
        type: String
    }
});

const User = mongoose.model('user',Userschema);
module.exports = User;