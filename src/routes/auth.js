const express=require('express');

const authRouter=express.Router();
const UserData = require("../models/user");
const {validateSignupData}=require('../utils/validation');

authRouter.post("/signup", async (req, res) => {
  try {
    
    validateSignupData(req);
  
    const { firstName, lastName, emailId, password } = req.body;
    const user = new UserData({
      firstName,
      lastName,
      emailId,
      password,
    });
    user.password=await user.encryptPassword();
    await user.save();
    res.send("user data saved sucessfully");
  } catch (err) {
    res.status(400).json(err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await UserData.findOne({ emailId: emailId });
    if (!user) {
      return res.status(500).send("invalid credentials");
    }
    const isValid = await user.verifyUser(password);
    if (isValid) {
      let token = await user.getJWT();
      res.cookie("token", token,{  expires: new Date(Date.now() + 24 * 3600000), httpOnly: true });
      res.send("Logged in successfully!!!");
    } else {
      res.status(500).send("invalid credentials");
    }
  } catch (err) {
    res.status(500).json({ message: err.message, error: err });
  }
});

module.exports=authRouter;