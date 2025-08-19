const express = require("express");
const UserData = require("./models/user");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

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
