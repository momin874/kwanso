import sequelize from "./../config/database";
import User from "./userModel";
import Task from "./taskModel";

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await User.sync();
    await Task.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default syncDatabase;
