const app = require("./app");
const connectDB = require('./config/database');
connectDB().then(() => {
    console.log("Connected to the databse");
    app.listen(7777, () => {
        {
            console.log("server is listening to the port 7777")
        }
    })
})
    .catch((err) => {
        console.error("Failed to connect to the database");

    });
