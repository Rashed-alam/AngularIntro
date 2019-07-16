//express class declared
const express = require('express');

//router object of express clas declared
var router = express.Router();

//get method deffination
router.get('/',(req, res) => {
    res.render('employee/addOrEdit',{
        viewtitle: "Insert or Edit employee!"
    });
});

//exports router to all class/models
module.exports = router;