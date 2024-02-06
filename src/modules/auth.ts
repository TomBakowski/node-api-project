import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const comparePasswords = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export const createJWT = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ message: "You are not authorized" });
  }

  const [, token] = bearer.split("Bearer ");

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    res.status(200).json({ message: "You are authorized" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not valid token" });
    return;
  }
};
