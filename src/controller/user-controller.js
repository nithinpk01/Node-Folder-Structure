module.exports = {
    login: (req, res) => {
      return res.status(200).json({
        message: "Login successfull"
      });
    },

    signup: (req, res) => {
      return res.status(200).json({
        message: "User registerd Successfully"
      });
    }
  };
  