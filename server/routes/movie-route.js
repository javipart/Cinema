const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    Movie.create(req.body);
    res.send({
        status: 'ok',
    })
});

module.exports = router;
