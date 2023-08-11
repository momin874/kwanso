import express, { Request, Response, Router } from "express";
import taskController from "./../../controllers/taskController";
const router: Router = express.Router();

router.get("/list-tasks", async (req: Request, res: Response) => {
  const { id } = req as express.Request & { id: number };

  const tasks = await taskController.getTasksByUserId(id);
  res.send({ tasks });
});
router.post("/create-tasks", async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id } = req as express.Request & { id: number };
  const task = await taskController.create(name, id);
  res.send({ task });
});
export default router;
