import { Pets, User } from "./models";
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

// export const fetchUsers = async (id) => {
//     try {
//         connectToDB();
//       const Users = await User.find();
//       return Users;
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to fetch Users!");
//     }
//   };

//   export const fetchUsers = async (q) => {
//       const regex = new RegExp(q, "i");
//       try {
//         connectToDB();
//         const count = await User.find({ username: { $regex: regex } }).count();
//         const users = await User.find({ username: { $regex: regex } })
//         return { count, users };
//       } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch users!");
//       }
//     };
