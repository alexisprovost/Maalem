const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// les infromations qu'on passe a la base de donnees pour la carte
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