const User = require("../models/user.model")
const jwt = require('jsonwebtoken')

exports.protect = async(req,res, next)=>{
    
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token) {
       return res.status(401).json({success:false,error: 'Unauthorized'})
    }

    const jwtSecret = process.env.JWT_SECRET

    try{
        const decoded = jwt.verify(token,jwtSecret)

        const user = await User.findById(decoded.id)

        if(!user){
            res.status(404).json({success:false,error: 'User not found'})
        }

        req.user = user

        next()
    }
    catch(err){
        res.status(401).json({success:false,error:err})
    }
}