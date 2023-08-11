import { DataTypes, Model } from "sequelize";
import sequelize from "./../../config/database";
import User from "./../userModel";

interface TaskAttributes {
  id: number;
  name: string;
  user: number;
}

class Task extends Model<TaskAttributes> {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Task",
  }
);

export default Task;
