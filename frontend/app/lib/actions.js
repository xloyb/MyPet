"use server";
import { revalidatePath } from "next/cache";
import { AdoptionRequest, Pet, Settings, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { auth, signIn } from "../../auth";
import { fetchUserByEmail, fetchUserByUsername } from "./data";

export const ManageRequest = async (formData) => {
  const { id, status } = Object.fromEntries(formData);

  //const rp = await AdoptionRequest.find( { _id: rui } );
  console.log("ayway", id, status);
  try {
    connectToDB();
    await AdoptionRequest.findByIdAndUpdate(id, { status: status });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update request");
  }

  revalidatePath("/dashboard/managerequests");
  redirect("/dashboard/managerequests");
};

export const DeleteMyRequest = async (formData) => {
  const { id, suid, uid } = Object.fromEntries(formData);
  // console.log(suid,"====",uid)
  try {
    connectToDB();
    if (suid === uid) {
      await AdoptionRequest.deleteOne({ _id: id });
    } else {
      throw new Error("You cannot delete others requests");
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Request!");
  }
  revalidatePath("/dashboard/myrequests");
  redirect("/dashboard/myrequests");
};

export const CreateResquest = async (formData) => {
  const { pid, uid, message } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newRequest = new AdoptionRequest({
      pet: pid,
      user: uid,
      message: message,
      status: "pending",
    });
    await newRequest.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Create Request!");
  }

  revalidatePath("/dashboard/myrequests");
  redirect("/dashboard/myrequests");
};

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isTeam } =
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
      isTeam,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addAnnouncement = async (formData) => {
  const { announcement, buttonLink } = Object.fromEntries(formData);

  console.log("find me xLoy");
  console.log(announcement + " " + buttonLink);

  try {
    connectToDB();

    if (buttonLink !== "" && buttonLink !== null) {
      const newAnnouncement = new Settings({
        type: "announcement",
        message: announcement,
        button: true, // Set button to true when buttonLink is provided
        buttonLink: buttonLink,
      });
      await newAnnouncement.save();
    } else {
      const newAnnouncement = new Settings({
        type: "announcement",
        message: announcement,
      });
      await newAnnouncement.save();
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new Announcement!");
  }

  revalidatePath("/dashboard/modcp");
  redirect("/dashboard/modcp");
};

export const deleteAnnouncements = async () => {
  try {
    await connectToDB();
    const result = await Settings.deleteMany({ type: "announcement" });
    revalidatePath("/dashboard/modcp");
    // redirect("/dashboard/modcp");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete Announcements!");
  }
};

export const deleteNotification = async () => {
  try {
    await connectToDB();
    const result = await Settings.deleteMany({ type: "notification" });
    revalidatePath("/dashboard/modcp");
    //redirect("/dashboard/modcp");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete notifications!");
  }
};

export const addNotification = async (formData) => {
  const { notification } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newNotification = new Settings({
      type: "notification",
      message: notification,
    });
    await Settings.deleteMany({ type: "notification" });
    await newNotification.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new notofication!");
  }

  revalidatePath("/dashboard/modcp");
  redirect("/dashboard/modcp");
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

export const deletAnnouncement = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Settings.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Announcement!");
  }
  revalidatePath("/dashboard/pets");
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
  const { id, username, email, password, phone, address, isAdmin, isTeam } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const UpdatedFields = {
      username,
      email,
      phone,
      address,
      isAdmin,
      isTeam,
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      UpdatedFields.password = hashedPassword;
    }

    Object.keys(UpdatedFields).forEach(
      (key) =>
        (UpdatedFields[key] === "" || UpdatedFields[key] === undefined) &&
        delete UpdatedFields[key]
    );

    await User.findByIdAndUpdate(id, UpdatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update User!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const UpdateUser_OLD = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isTeam } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const UpdatedFields = {
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isTeam,
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

export const UpdateSettings_old = async (formData) => {
  const { id, username, email, password, phone, address } =
    Object.fromEntries(formData);

  const CheckUsername = await fetchUserByUsername(username);
  if (CheckUsername) throw new Error("User Name Exists");
  const CheckEmail = await fetchUserByEmail(email);
  if (CheckEmail) throw new Error("Email Is Taken");
  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const UpdatedFields = {
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isTeam,
    };

    Object.keys(UpdatedFields).forEach(
      (key) =>
        (UpdatedFields[key] === "" || undefined) && delete UpdatedFields[key]
    );

    await User.findByIdAndUpdate(id, UpdatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update My Settings");
  }

  revalidatePath("/dashboard/profile");
  redirect("/dashboard/profile");
};

export const UpdateSettings = async (formData) => {
  const { id, username, email, password, phone, address } =
    Object.fromEntries(formData);

  // Check if the password field is not empty
  const shouldUpdatePassword = password !== "";

  // Check if the password meets the minimum length requirement
  if (shouldUpdatePassword && password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  const CheckUsername = await fetchUserByUsername(username);
  if (CheckUsername) throw new Error("User Name Exists");

  const CheckEmail = await fetchUserByEmail(email);
  if (CheckEmail) throw new Error("Email Is Taken");

  try {
    connectToDB();

    const UpdatedFields = {
      username,
      email,
      phone,
      address,
    };

    // If the password is provided, hash it and include it in the update
    if (shouldUpdatePassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      UpdatedFields.password = hashedPassword;
    }

    Object.keys(UpdatedFields).forEach(
      (key) =>
        (UpdatedFields[key] === "" || UpdatedFields[key] === undefined) &&
        delete UpdatedFields[key]
    );

    await User.findByIdAndUpdate(id, UpdatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update My Settings");
  }

  revalidatePath("/dashboard/profile");
  redirect("/dashboard/profile");
};

export const authenticate = async (formData) => {
  try {
    // const { username, password } = Object.fromEntries(
    //   Object.entries(formData).filter(([key, value]) => typeof key === 'string')
    // );
    const { username, password } = Object.fromEntries(formData);
    // console.log("-----------------------------------");
    // console.log(username + ", " + password);

    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
