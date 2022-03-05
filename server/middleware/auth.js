const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  console.log("Auth Middleware");

  const { access_token } = req.headers;

  if (access_token) {
    try {
      let verify = tokenVerifier(access_token);
      req.userData = verify;
    } catch (error) {
      res.status(401).json({
        error,
        message: "User not authenticated",
      });
    }
  } else {
    res.status(404).json({
      message: "Token not found",
    });
  }

  next();
};

module.exports = {
  authentication,
};
