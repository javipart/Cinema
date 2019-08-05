const express = require('express');
const Coupon = require('../models/coupon');
const router = express.Router();

router.post('/', async (req, res) => {
    const { code, discount } = req.body;
    console.log(code);
    console.log(discount);
    if(code != undefined && discount != undefined) {
        await Coupon.create(req.body)
            .then(() => {
                res.send({
                    status: 'ok',
                });
            });
    } else if(code != undefined && discount == undefined) {
        await Coupon.find()
        .then((coupons) => {
            coupons.forEach(function(coupon) {
                if(coupon.code == code) {
                    res.send({
                        status: 'ok',
                        discount: coupon.discount,
                    });
                }
                else {
                    res.send({
                        status: 'error',
                    });
                }
            })
        })
        .catch((err) => {
            res.send(err);
        });
    }
});

module.exports = router;
