const jwt = require("jsonwebtoken");

module.exports = verifyTokenMiddleware = (req, res, next) => {
  const accessToken = req.headers["authorization"];

  if (accessToken == null) return res.sendStatus(401);
  jwt.verify(
    accessToken.replace("Bearer ", ""),
    process.env.SECRET_ACCESS_TOKEN,
    (err, data) => {
      if (err) return res.status(402).send(err);
      req.user = data;
      next();
    }
  );
};
