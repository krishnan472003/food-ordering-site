const express = require('express')
const router = express.Router()
const Orders = require('../models/Orders')

router.post('/myorderdata', async (req, res) => {
    try {
        console.log("reached")
        let myData = Orders.findOne({ 'email': req.body.email })
        res.json({ orderData: myData })
    }
    catch (error) {
        console.log(error.message)
        res.send("Error")
    }

})
module.exports = router;
