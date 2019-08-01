const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    await User.create(req.body);

    User.find({ "email": req.body.email })
        .then((user) => {
            res.send({
                status: 'ok',
                id: user[0]._id,
            });
        });
});

module.exports = router;
