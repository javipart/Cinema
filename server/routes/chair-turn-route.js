const express = require('express');
const Chair = require('../models/chair');
const Turn = require('../models/turn');
const router = express.Router();

router.post('/', (req,res) => {
    const { id } = req.body;
    let idTurns = [];
    console.log(id);
    Chair.find()
        .then((chairs) => {
            chairs.forEach(function(chair) {
                if(chair.turn._id == id) {
                    idTurns.push(`${chair.row}${chair.number}`);
                }
            });
            res.send({
                status: 'ok',
                idTurns,
            });
        })
});

module.exports = router;