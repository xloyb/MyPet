import { Pets, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (id) => {
    try {
    connectToDB();
      const Users = await User.find();
      return Users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch Users!");
    }
  };
