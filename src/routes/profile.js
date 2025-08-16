const express=require('express');

const profileRouter=express.Router();
const { useAuth } = require("../middlewares/auth");
profileRouter.get("/profile", useAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message, error: err });
  }
});

module.exports=profileRouter;
