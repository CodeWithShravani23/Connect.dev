const express=require('express');

const authRouter=express.Router();

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
