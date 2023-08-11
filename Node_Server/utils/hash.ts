import bcrypt from "bcrypt";
const saltRounds = 10;

const hash = {
  encrypt: async (password: string): Promise<string | boolean> => {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      return hash;
    } catch (error) {
      console.log("error encrypting password", error);
      return false;
    }
  },
  match: async (password: string, savedPassword: string): Promise<boolean> => {
    try {
      return await bcrypt.compare(password, savedPassword);
    } catch (error) {
      console.log("error comparing passwords", error);
      return false;
    }
  },
};
export default hash;
