const express = require("express");

const app = express();
const { isAuthenticate } = require("./middlewares/auth");


module.exports = app;
