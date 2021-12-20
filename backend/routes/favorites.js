const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config");
const { check, validationResult } = require('express-validator');
const favoritesModel = require("../models/favorites");


router.get('/', async (req, res)=>{
    const results = await favoritesModel.find({});
    res.json(results);
});


router.post('/add',[
    check('id').isNumeric(),
    check('original_title').isString(),
    check('overview').isString(),
    check('poster_path').isString(),
], async (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const doc = await favoritesModel.findOne({ id: req.body.id});
    
    if(doc){
        return res.status(400).json({
            error: "movie already in favorites"
        })
    }

    const results = new favoritesModel({
        id: req.body.id,
        original_title: req.body.original_title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
    })
    
    results.save();

    res.json(results)
});



module.exports = router;