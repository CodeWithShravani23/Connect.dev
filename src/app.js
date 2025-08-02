const express = require("express");
const UserData = require("./models/user");

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
module.exports = app;
