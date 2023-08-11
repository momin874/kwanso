import express, { Express } from "express";
import userRoutes from "./user/userRoutes";
import taskRoutes from "./task/taskRoutes";
import validateUser from "./../middlewares/auth";
import syncDatabase from "./../models";
(async () => {
  await syncDatabase();
})();

const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(userRoutes);
app.use(validateUser);
app.use(taskRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
