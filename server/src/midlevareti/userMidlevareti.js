const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;




const authenticateToken = (req, res, next) => {
  const { token } = req.cookies; 

  if (!token) {
    return res.status(401).json({ message: 'Нет токена, доступ запрещён' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Неверный токен', err });
  }
};

module.exports = authenticateToken;