import { Pet, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    //   const Users = await User.find();
    const Users = await User.find({ username: { $regex: regex } });

    return Users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Users!");
  }
};

export const fetchPets = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const Pets = await Pet.find({ breed: { $regex: regex } });
    return Pets;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Pets!");
  }
};

export const fetchPet = async (id) => {
  try {
    connectToDB();

    const pett = await Pet.findById(id);
    return pett;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch pet!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

