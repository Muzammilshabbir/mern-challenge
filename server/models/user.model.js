const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide an email"]
    },
    password: {
        type: String,
        minLength: 6,
        unique: true,
        required: [true, "Please provide a password"],
    }
})


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    } 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password,this.password)
}

const jwtExpiry = process.env.JWT_EXPIRY;
const jwtSecret = process.env.JWT_SECRET;

userSchema.methods.getSignedToken = function(){
    return jwt.sign({ id: this._id },jwtSecret,{expiresIn:jwtExpiry})
}

const User = mongoose.model('User', userSchema)

module.exports = User