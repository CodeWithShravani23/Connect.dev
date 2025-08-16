const express=require('express');

const requestRouter=express.Router();
const { useAuth } = require("../middlewares/auth");

requestRouter.post("/ConnectionRequest",useAuth,(req,res)=>{
  res.send("connection request sent !!")
});

module.exports=requestRouter;