"use server"

import { revalidatePath } from "next/cache";
import { Pet, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";



export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};



export const addPet = async (formData) => {
  const { breed, name, desc, price, stock, img, age } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    
    const newPet = new Pet({
      breed, name, desc, price, stock, img, age,
    });

    await newPet.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Pet!");
  }

  revalidatePath("/dashboard/pets");
  redirect("/dashboard/pets");
};
