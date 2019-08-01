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

router.get('/', (req, res) => {
    Movie.find()
        .then((movies) => {
            res.send(movies);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
