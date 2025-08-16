const express=require('express');

const userRouter=express.Router();

userRouter.get("/user", async (req, res) => {
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

module.exports=userRouter;