const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const userSchema = new Schema({
  firstName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
     required:true,
     unique:true
  },
  password: {
    type: String,
     required:true
  },
  age: {
    type: Number,
     required:true
  },
  gender: {
    type: String,
     required:true
  },
});
const UserData = mongoose.model("User", userSchema);
module.exports = UserData;
