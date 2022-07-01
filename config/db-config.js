const mongoose = require("mongoose");
require('dotenv').config();
const dbUrl = process.env.dbURL;

module.exports = () => {

  const params = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  };

  mongoose.connect(dbUrl, params, () => {
    console.log(`DB Connected to ${dbUrl}`)
  },
    e => console.error(e))
};