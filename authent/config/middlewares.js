const jwt = require("jsonwebtoken");
const jwtKey = require("../_secrets/keys").jwtKey;

function tokenGeneration(user) {
  const payload = { username: user.username };
  const options = { expiresIn: 1000 * 60 * 60 };
  return jwt.sign(payload, jwtKey, options);
}


function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}
