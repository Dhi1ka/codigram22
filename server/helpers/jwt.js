const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const tokenGenerator = (user) => {
  const { name, email, image } = user;
  const token = jwt.sign(
    {
      name,
      email,
      image,
    },
    secretKey,
  );
  return token;
};

const tokenVerifier = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
