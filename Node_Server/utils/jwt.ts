import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET_KEY || "";
const jwtHandler = {
  generateToken: (payload) => {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
    return token;
  },
  varifyToken: (token) => {
    try {
      const decodedToken = jwt.verify(token, jwtSecret);

      if (decodedToken) {
        return {
          payload: decodedToken,
        };
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
    return {};
  },
};
export default jwtHandler;
