const express=require("express");
const app=express();
const {isAuthenticate} =require("./middlewares/auth");

module.exports =app;
app.get("/user",isAuthenticate);

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(401).end("Something went wrong");
    }
})