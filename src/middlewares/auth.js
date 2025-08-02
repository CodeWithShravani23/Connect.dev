const isAuthenticate = (req, res, next) => {
  const token = "uwcugcdggdhd";
  const Authenticated = token === "uwcugcdggdhd";
  if (!Authenticated) {
    res.status(401).send("error");
  } else {
    next();
  }
};
module.exports = { isAuthenticate };
