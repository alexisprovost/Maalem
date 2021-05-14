const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema & model
const Cardschema = new Schema({
    title: {
        type: String
    },
    subject: {
        type: String
    },
    description: {
        type: String
    },
    images: [{
        type: String
    }],
    author: {
        type: String
    },
    reward: {
        type: Number
    }
});

const Card = mongoose.model('card', Cardschema);
module.exports = Card;