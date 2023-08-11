import { DataTypes, Model } from "sequelize";
import sequelize from "./../../config/database";

export interface UserAttributes {
  id: number;
  email: string;
  password?: string;
}
class User extends Model<UserAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
