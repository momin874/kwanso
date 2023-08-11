import express, { Request, Response, Router } from "express";
import userController from "./../../controllers/userController";
import hash from "./../../utils/hash";
import jwtHandler from "./../../utils/jwt";
import validateUser from "./../../middlewares/auth";

const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await hash.encrypt(password);
  if (typeof hashedPassword === "string") {
    const user: any = await userController.create(email, hashedPassword);
    res.send({
      user,
    });
  } else {
    res.status(500).send("Error creating user");
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: any = await userController.getUserByEmail(email);
  if (!user) {
    res.status(401).send("User not found");
    return;
  }
  const login = await hash.match(password, user.password);
  if (login) {
    const jwtToken = jwtHandler.generateToken({
      id: user.id,
      email: user.email,
    });
    res.setHeader("Authorization", `Bearer ${jwtToken}`);
    res.send("logged in successfully");
  } else {
    res.status(401).send("Authentication failed");
  }
});
router.get("/user", validateUser, async (req: Request, res: Response) => {
  const { email } = req as express.Request & { email: string };

  const user: any = await userController.getUserByEmail(email);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  res.send({ user: { id: user.id, email: user.email } });
});

export default router;
