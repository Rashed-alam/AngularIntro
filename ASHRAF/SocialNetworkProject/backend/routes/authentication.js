const express = require('express');
const router = express.Router();
const User = require('../models/user');

//POSTING THE CHIPS INTO THE DB
router.post('/register',(req,res,next)=>{ 
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
   
});


module.exports = router; 