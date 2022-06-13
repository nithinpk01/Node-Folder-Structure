const express = require("express");
const  dbConfig  = require("./config/db-config");
const bodyParser = require('body-parser')
require('dotenv').config();
const port = process.env.PORT;

const { PingPong, AuthUser } = require("./src/routes");

const app = express();
dbConfig(); // db connection

app.listen(port);

console.log(`App listening at http://localhost:${port}`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", PingPong)
app.use("/auth/user", AuthUser)
app.use("/", (req, res) => {
    res.send("Welcome to Web Page")
});