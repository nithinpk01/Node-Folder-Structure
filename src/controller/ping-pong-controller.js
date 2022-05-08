module.exports = {
    ping: (req, res) => {
      return res.status(200).json({
        message: "pong"
      });
    },
  
    pong: (req, res) => {
      return res.status(200).json({
        message: "ping"
      });
    }
  };
  