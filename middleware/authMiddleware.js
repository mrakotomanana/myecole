const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Accès refusé. Aucun token fourni." });

  try {
    // const dataSecret = process.env.SECRET_KEY || crypto.randomBytes(32).toString('hex');
    const decoded = jwt.verify(token.replace("Bearer ", ""), "SECRET_KEY");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Token invalide." });
  }
};

const verifyRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Accès interdit." });
    }
    next();
  };
};

module.exports = { verifyToken, verifyRole };
