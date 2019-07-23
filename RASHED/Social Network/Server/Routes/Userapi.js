const express = require('express');
const router = express.Router();
const UserInfo = require('../Models/user');


router.post('/users', function (req, res, next) {
    //console.log(req.body); 
    UserInfo.create(req.body).then(function (user) {
       res.send(user);
 
    }).catch(next);
 
 });
 module.exports = router;
