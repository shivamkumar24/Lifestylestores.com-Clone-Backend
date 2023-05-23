const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (token) {
    const decoded = jwt.verify(token, "avengers", (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(400).send({ msg: "UserID Not Found ....." });
      }
    });
  } else {
    res.status(400).send({ msg: "Please Login First ....." });
  }
};

module.exports = {
  authMiddleware,
};
