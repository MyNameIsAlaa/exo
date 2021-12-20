const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config")
const { check, validationResult } = require('express-validator');


router.get('/top', async (req, res)=>{
    const url = new URL(config.API_URL + 'movie/now_playing');
    url.searchParams.append("api_key", config.API_KEY);
    const respond = await axios.get(url.toString());
    res.json(respond.data);
});



router.get('/search/:keyword?',
[
    check('keyword').isString(),
]
, async (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const keyword = req.params.keyword || ""
    const url = new URL(config.API_URL + 'search/movie');
    url.searchParams.append("api_key", config.API_KEY);
    url.searchParams.append("query", keyword);
    const respond = await axios.get(url.toString());
    res.json(respond.data);
});


module.exports = router;