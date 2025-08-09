const express = require("express");
const UserData = require("./models/user");
const { model } = require("mongoose");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new UserData(req.body);
  try {
    await user.save();
    res.send("user data saved sucessfully");
  } catch (err) {
    res.status(400).json({ message: err.message, error: err });
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
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
app.delete("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    await UserData.findByIdAndDelete(userId);
    res.send("user deleted sucessfully");
  } catch (err) {
    res.status(500).send("Error deleting an user ");
  }
});

//UPDATE DATA
app.patch("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    const data = req.body;
    await UserData.findByIdAndUpdate(userId, data);
    res.send("Data updated sucessfully");
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Error updating an user ");
  }
});
