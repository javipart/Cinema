const express = require('express');
const Turn = require('../models/turn');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    Turn.create(req.body);
    res.send({
        status: 'ok',
    });
});

router.get('/', (req, res) => {
    Turn.find()
        .populate('movie')
        .exec()
        .then((turn) => {
            res.send(turn);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
