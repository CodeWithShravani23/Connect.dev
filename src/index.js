const app = require("./app");
const connectDB = require("./config/database");
require("dotenv").config();

connectDB()
  .then(() => {
    console.log("Connected to the databse");
    const PORT = process.env.PORT || 7777;
    app.listen(PORT, () => {
      {
        console.log(`server is listening to the port ${PORT}`);
      }
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database");
  });
