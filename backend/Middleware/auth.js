import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token =
    req.cookies?.token ||    // <-- Correct
    req.headers['authorization']?.split(" ")[1];

  console.log("operation", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized User" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid/Expired token" });
  }
};
