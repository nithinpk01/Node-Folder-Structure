const express = require("express");
const bodyParser = require('body-parser')
require('dotenv').config();
const port = process.env.PORT;

const { PingPong } = require("./src/routes/ping-pong");

const app = express();

app.listen(port);

console.log(`App listening at http://localhost:${port}`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/",PingPong)
app.use("/", (req,res)=>{
    res.send("Assddd")
});