const express = require("express");
const UserData = require("./models/user");
const { model } = require("mongoose");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new UserData(req.body);
  try {
    await user.save();
    res.send("user data saved sucessfully");
  } catch (err) {
    res.status(505).send("Error saving the data ");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    users =await UserData.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(505).send("Error getting user ");
  }
});

//Feed api
app.get("/feed",async(req,res)=>{
  try {
    const users= await UserData.find({});
    res.send(users);

  }
  catch (err) {
    res.status(505).send("Error getting feed ");
  }

})
module.exports = app;
