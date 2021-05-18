const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// les infromations qu'on passe a la base de donnees pour l'utilisateur
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