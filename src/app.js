const express = require("express");
const UserData = require("./models/user");
const { model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { useAuth } = require("./middlewares/auth");
const {validateSignupData}=require('./utils/validation')
const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    //validate
    validateSignupData(req);
    //Encrypt the password
    const { firstName, lastName, emailId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserData({
      firstName,
      lastName,
      emailId,
      password: hashedPassword,
    });
    await user.save();
    res.send("user data saved sucessfully");
  } catch (err) {
    res.status(400).json(err.message);
  }
});


app.post("/login", async (req, res) => {
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

app.get("/profile", useAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message, error: err });
  }
});

app.post("/ConnectionRequest",useAuth,(req,res)=>{
  res.send("connection request sent !!")
})

app.get("/user", async (req, res) => {
  const userEmail = req.query.emailId;
  try {
    users = await UserData.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(500).send("Error getting user ");
  }
});

//Feed api
app.get("/feed", async (req, res) => {
  try {
    const users = await UserData.find({});
    if (!users) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(500).send("Error getting feed ");
  }
});
module.exports = app;

//Delete a user
app.delete("/user/:id", async (req, res) => {
  try {
    const userId = req.params?.id;
    await UserData.findByIdAndDelete(userId);
    res.send("user deleted sucessfully");
  } catch (err) {
    res.status(500).send("Error deleting an user ");
  }
});

//UPDATE DATA
app.patch("/user/:id", async (req, res) => {
  const userId = req.params?.id;
  const data = req.body;
  try {
    const allowedUpdate = [
      "profilePhoto",
      "about",
      "skills",
      "firstName",
      "lastName",
      "age",
    ];
    const isAllowed = Object.keys(data).every((k) => allowedUpdate.includes(k));
    if (!isAllowed) {
      return res.status(400).send("Update is not allowed");
    }

    await UserData.findByIdAndUpdate(userId, data, {
      new: true,
      runValidators: true,
    });
    res.send("Data updated sucessfully");
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Error updating an user ");
  }
});
