import { Request, Response, NextFunction } from "express";
import jwtHandler from "../utils/jwt";

declare global {
  namespace Express {
    interface Request {
      email: string;
      id: string;
    }
  }
}

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const jwt = req.headers.authorization;

  if (!jwt || !jwt.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = jwt.split(" ")[1];

  const userData = jwtHandler.varifyToken(token);

  if (userData.payload) {
    req.email =
      userData.payload instanceof Object ? userData.payload.email : "";
    req.id = userData.payload instanceof Object ? userData.payload.id : "";
    next();
    return;
  } else {
    res.status(401).send("Unauthorized user");
  }
};
export default validateUser;
