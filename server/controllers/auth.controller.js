const User = require('../models/user.model')

const login = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
      res
        .status(422)
        .json({ success: false, error: "Email or Password can not be blank" });
    }
  
    try {
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        res.status(422).json({ success: false, error: "Invalid Credentials" });
      }
  
      const isMatch = await user.matchPasswords(password);
      if (!isMatch) {
        res.status(404).json({ success: false, error: "Invalid Credentials" });
      }
  
  
      res.status(200).json({ success: true, user, token: user.getSignedToken() });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }

}
const logout = async(req, res, next) => {
    res.cookie('token','none',{
      httpOnly: true,
    });
  
    res.status(200).json({success: true,message:"Logged Out"})
  }
  

module.exports = {login,logout}