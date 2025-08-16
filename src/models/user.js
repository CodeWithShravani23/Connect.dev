const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");
const jwt=require('jsonwebtoken');
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email id is not valid" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 100,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("password is not strong");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 90,
    },
    gender: {
      type: String,

      enum: ["male", "female", "other"],
    },
    profilePhoto: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Url is not valid");
        }
      },
    },
    about: {
      type: String,
      maxLength: 300,
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);
const UserData = mongoose.model("User", userSchema);
userSchema.methods.getJWT=async function(){
  const user=this;
   let token = await jwt.sign({ _id: user._id }, "Shravani@1234",{ expiresIn: '1d' });
   return token;
}
module.exports = UserData;
