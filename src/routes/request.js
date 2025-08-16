const express=require('express');

const requestRouter=express.Router();

requestRouter.post("/ConnectionRequest",useAuth,(req,res)=>{
  res.send("connection request sent !!")
});

module.exports=requestRouter;