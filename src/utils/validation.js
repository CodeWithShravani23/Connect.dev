const UserData = require("../models/user");
const validateSignupData = (req) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) throw new Error("Name is not valid");
};
module.exports = { validateSignupData };
