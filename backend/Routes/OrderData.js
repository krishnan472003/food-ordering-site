const express = require('express')
const router = express.Router()
const Orders = require('../models/Orders')

router.post('/orderdata', async (req, res) => {
    let data = []
    await data.splice(0, 0, { Order_date: req.body.order_date })
    // console.log("1231242343242354", req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Orders.findOne({ 'email': req.body.email })
    console.log(eId)
    if (eId === null) {
        try {
            await Orders.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Orders.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

module.exports = router;