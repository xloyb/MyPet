"use server";

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
      breed,
      name,
      desc,
      price,
      stock,
      img,
      age,
    });

    await newPet.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Pet!");
  }

  revalidatePath("/dashboard/pets");
  redirect("/dashboard/pets");
};

export const deletPet = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Pet.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Pet!");
  }
  revalidatePath("/dashboard/pets");
};

export const deletUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete User!");
  }
  revalidatePath("/dashboard/users");
};

export const UpdatePet = async (formData) => {
  const { id, breed, name, desc, price, stock, img, age } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const UpdatedFields = {
      breed,
      name,
      desc,
      price,
      stock,
      img,
      age,
    };

    Object.keys(UpdatedFields).forEach(
      (key) =>
        (UpdatedFields[key] === "" || undefined) && delete UpdatedFields[key]
    );

    await Pet.findByIdAndUpdate(id, UpdatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Pet!");
  }

  revalidatePath("/dashboard/pets");
  redirect("/dashboard/pets");
};

export const UpdateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const UpdatedFields = {
      username,
      email,
      password:hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(UpdatedFields).forEach(
      (key) =>
        (UpdatedFields[key] === "" || undefined) && delete UpdatedFields[key]
    );

    await User.findByIdAndUpdate(id, UpdatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update User!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
