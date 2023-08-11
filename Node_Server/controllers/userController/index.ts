import User from "./../../models/userModel";

export interface User_Attributes {
  id: number;
  email: string;
  password?: string;
}

const userController = {
  create: async (email: string, password: string): Promise<User_Attributes> => {
    const newUser = await User.create({ email, password });
    return {
      id: newUser.dataValues.id,
      email: newUser.dataValues.email,
    };
  },
  getUserByEmail: async (email: string): Promise<User_Attributes | {}> => {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (user) {
        return user.toJSON();
      } else {
        console.log("user not found");
        return {};
      }
    } catch (error) {
      console.log("error fetching user data", error);
      return {};
    }
  },
};
export default userController;
