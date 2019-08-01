const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    User.find()
        .then((users) => {
            users.forEach(function(user) {
                if(user.email === email && user.password === password) {
                    res.send({
                        status: 'ok',
                        id: user._id,
                    });
                }
                else {
                    res.status(422).send({
                        status: 'error'
                    })
                }
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
