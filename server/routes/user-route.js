const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    User.create(req.body);
    res.send({
        status: 'ok',
    })
});

module.exports = router;
