import React from "react";
import styles from "../../dashboard.module.css";
import { addLostPet } from "@/app/lib/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const { user } = await auth();

  return (
    <div className={styles.home_container}>
      <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Add New Pets Store</h2>
            <form action={addLostPet} className="grid max-w-2xl mx-auto mt-8">
  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
    {/* Image Upload */}
    <img
      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
      src="/images/default-Pet.png"
      alt="Bordered avatar"
    />
    {/* File Input and Delete Button */}
    <div className="flex flex-col space-y-5 sm:ml-8">
      <input
        type="file"
        name="file"
        className="file-input w-full max-w-xs"
        accept="image/png, image/jpeg"
      />
      <button
        type="button"
        className="py-3.5 px-7 text-base font-medium  focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
      >
        Delete picture
      </button>
    </div>
  </div>

  {/* Lost Pet Information Inputs */}
  <div className="items-center mt-8 sm:mt-14">
    {/* Name and Breed */}
    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
      {/* Name */}
      <div className="w-full">
        <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-indigo-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
          placeholder="Name"
          required
        />
      </div>
      {/* Breed */}
      <div className="w-full">
        <label htmlFor="breed" className="block mb-2 text-sm font-medium dark:text-white">
          Breed
        </label>
        <input
          type="text"
          id="breed"
          name="breed"
          className="border border-indigo-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
          placeholder="Breed"
          required
        />
      </div>
    </div>

    {/* Description */}
    <div className="mb-2 sm:mb-6">
      <label htmlFor="desc" className="block mb-2 text-sm font-medium dark:text-white">
        Description
      </label>
      <textarea
        id="desc"
        name="desc"
        rows={4}
        className="block p-2.5 w-full text-sm rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Description"
        required
      ></textarea>
    </div>

    {/* Age */}
    <div className="mb-2 sm:mb-6">
      <label htmlFor="age" className="block mb-2 text-sm font-medium dark:text-white">
        Age
      </label>
      <input
        type="text"
        id="age"
        name="age"
        className="border border-indigo-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
        placeholder="Age"
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-end">
      <button
        type="submit"
        className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
      >
        Save
      </button>
    </div>
  </div>
</form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
