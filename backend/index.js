const express = require('express')
const { mongo } = require('mongoose')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/LoginUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/OrderData'))
app.use('/api',require('./Routes/myOrderData'))
app.get('/',(req,res) =>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log(`Example app is running on port ${port}`)
})