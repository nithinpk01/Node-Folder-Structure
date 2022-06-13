const UserService = require('../services/user');

module.exports = {
    login: (req, res) => {
      return res.status(200).json({
        message: "Login successfull"
      });
    },

    signup: async (req, res) => {
      await UserService.create(req.body);
      return res.status(200).json({
        message: "User registerd Successfully"
      });
    },
    
    list: async (req, res) => {
      const list = await UserService.list();
      return res.status(200).json(list);
    }
  };
  