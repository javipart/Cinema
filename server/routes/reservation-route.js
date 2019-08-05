const express = require('express');
const Reservation = require('../models/reservation');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    Reservation.create(req.body);
    res.send({
        status: 'ok',
    })
});

router.get('/', (req, res) => {
    Reservation.find()
        .populate({
            path: 'chair' ,
            populate: {
                path: 'turn',
                populate: {
                    path: 'movie',
                }
            }
        })
        .populate('user')
        .exec()
        .then((reservations) => {
            res.send(reservations);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
