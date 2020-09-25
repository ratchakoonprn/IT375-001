const express = require('express');
const router = express.Router();

//import data
const restaurantsObj = require('../data');

//render web
router.get('/',(req,res)=>{
    res.render('main',{restaurants:restaurantsObj});
});

module.exports = router;