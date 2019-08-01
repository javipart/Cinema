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

module.exports = router;
