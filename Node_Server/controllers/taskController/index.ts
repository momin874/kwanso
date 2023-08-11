import Task from "./../../models/taskModel";

interface TaskAttributes {
  id: number;
  name: string;
}

const taskController = {
  create: async (name: string, userId: number): Promise<TaskAttributes> => {
    try {
      const newTask = await Task.create({ name, user: userId });
      return {
        id: newTask.dataValues.id,
        name: newTask.dataValues.name,
      };
    } catch (error) {
      console.log("error creating task", error);
    }
  },
  getTasksByUserId: async (userId: number): Promise<TaskAttributes[]> => {
    try {
      const tasks = await Task.findAll({
        attributes: ["id", "name"],
        where: { user: userId },
      });
      return tasks.map((task) => ({
        id: task.dataValues.id,
        name: task.dataValues.name,
        user: task.dataValues.user,
      }));
    } catch (error) {
      console.log("error fetching user data", error);
    }
  },
};
export default taskController;
