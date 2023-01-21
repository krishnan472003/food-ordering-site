const express = require('express')
const router = express.Router()
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const { useRouteLoaderData, useNavigate } = require('react-router-dom');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const jwtSecret = "ThisisajwtSecretdaontshare"
router.post("/loginuser" ,
body('email').isEmail(),
body('password').isLength({min:5}),
async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let email = req.body.email;
    try{
        console.log("hey");
            let userData = await User.findOne({email});
            if(!userData){
                return res.status(400).json({errors:"Try with correct email",success:false})
            }
            const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
            if(!pwdCompare){
                return res.status(400).json({errors:"Try with correct credentials",success:false})
            }
            const data = {
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({success:true,authToken: authToken})
    }
    catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router