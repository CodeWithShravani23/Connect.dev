const jwt = require("jsonwebtoken");
const UserData = require("../models/user");

const useAuth = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;
    if (!token) throw new Error("token is Missing ");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decoded;
    const user = await UserData.findById(_id);
    if (!user) throw new Error("user not found");

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message, error: err });
  }
};
module.exports = { useAuth };
