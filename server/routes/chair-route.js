const express = require('express');
const Chair = require('../models/chair');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    Chair.create(req.body);
    res.send({
        status: 'ok',
    })
});

router.get('/', (req, res) => {
    Chair.find()
        .populate('turn')
        .exec()
        .then((turn) => {
            res.send(turn);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
