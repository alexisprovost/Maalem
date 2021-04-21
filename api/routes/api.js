const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get a list of users from the database
router.get('/users', function(req,res,next){
    User.find({}).then(function(users){
        res.send(users);
    }).catch(next);
});

// add a new User to database
router.post('/users',function(req,res,next){
    User.create(req.body).then(function(User){
        res.send(User);
    }).catch(next);
});

// update a User in the database
router.put('/users/:id',function(req,res,next){
    User.findOneAndUpdate({_id: req.params.id},req.body).then(function(User){
        User.findOne({_id: req.params.id}).then(function(User){
            res.send(User);
        });
    });
});

// delete a User in the database
router.delete('/users/:id',function(req,res,next){
    User.findOneAndDelete({_id: req.params.id}).then(function(User){
        res.send(User);
    });
});

router.get('/', function (req, res) {
    res.json({
        status: 'success',
        message: 'REST API for Maalem version 1'
    });
});

module.exports = router;