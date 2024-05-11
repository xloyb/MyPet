import { AdoptionRequest, Pet, PetStore, Settings, User, Veterinary, LostPet, Trainer, PetsMating } from "./models";
import { connectToDB } from "./utils";
import { Types } from "mongoose";

export const fetchAllRequests = async () => {
  try {
    connectToDB();
    const requests = await AdoptionRequest.find();
    return requests;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch User Requests!");
  }
};

export const fetchUserRequests = async (uid) => {
  //console.log("User ID:", uid);
  try {
    connectToDB();
    //const requests = await AdoptionRequest.findById('660367f324ad8217be668004')
    //const requests = await AdoptionRequest.find({ user: Types.ObjectId(uid) });
    const requests = await AdoptionRequest.find({
      user: new Types.ObjectId(uid),
    });
    //console.log("testststst",requests)
    return requests;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch User Requests!");
  }
};

export const fetchAllAnnouncements = async () => {
  try {
    connectToDB();
    const ann = await Settings.find({ type: "announcement" });
    return ann;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch the announcements!");
  }
};

export const fetchNotif = async () => {
  try {
    connectToDB();
    const notif = await Settings.findOne({ type: "notification" });
    return notif;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch a notification!");
  }
};

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

export const fetchVeterinaries = async (q) => {
  try {
    connectToDB();
    const Vets = await Veterinary.find()
    return Vets;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Veterinaries!");
  }
};

export const fetchPetStores = async (q) => {
  try {
    connectToDB();
    const ps = await PetStore.find();
    return ps;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Pets Stores!");
  }
};


export const fetchlostpets = async () => {
  try {
    connectToDB();
    const ls = await LostPet.find();
    return ls;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Lost Pets!");
  }
};


export const fetchMatingPets = async () => {
  try {
    connectToDB();
    const mp = await PetsMating.find();
    return mp;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Lost Pets!");
  }
};

export const fetchTrainer = async () => {
  try {
    connectToDB();
    const t = await Trainer.find();
    return t;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Trainers!");
  }
};

export const fetchPet = async (id) => {
  try {
    connectToDB();
    // console.log("checking id type inside the function",id)
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

export const fetchUserByEmail = async (email) => {
  try {
    connectToDB();
    const user = await User.findOne({ email: email });
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user by email!");
  }
};

export const fetchUserByUsername = async (username) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: username });
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user by username!");
  }
};
