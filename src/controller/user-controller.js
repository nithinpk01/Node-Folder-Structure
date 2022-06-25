const User = require("../model/user");
const jwt = require('../services/jwt');
const passwordService = require('../services/password');


module.exports = {

  // USER LOGIN
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return res.status(401).json({ message: "Wrong Email" });

      const originalPassword = passwordService.decrypt(user.password)
      if (originalPassword != req.body.password)
        return res.status(401).json({ message: "Wrong Password" });

      const { password, ...info } = user._doc;
      const token = jwt.createToken({ id: user._id, email: user.email });
      return res.status(200).json({ ...info, token });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  // USER SIGNUP
  signup: async (req, res) => {
    try {
      const user = await User.findOne({ $or: [{ email: req.body.email }, { mobile: req.body.mobile }] })
      if (user)
        return res.status(200).json({ message: "User already exist" });

      const password = passwordService.encrypt(req.body.password);
      req.body.password = password;
      await User.create(req.body);
      return res.status(200).json({ message: "User registered Successfully" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //LIST USERS
  list: async (req, res) => {
    try {
      const list = await User.find();
      return res.status(200).json(list);
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //LIST USER BY ID
  listById: async (req, res) => {
    try {
      const list = await User.findById(req.params.id);
      return res.status(200).json(list);
    }
    catch (err) {
      return res.status(500).json(err)
    }
  }
};
