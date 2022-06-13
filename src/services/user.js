const User = require("../model/user");
const cryptoJS = require("crypto-js");
module.exports = {
    create: async (data) => {
      const password = cryptoJS.AES.encrypt(data.password, process.env.SECRET_KEY).toString();
      data.password = password
      return await User.create({ ...data });
    },

    list: async () => {
      return await User.find();
    }
  };