import React from "react";
import styles from "@/app/dashboard/dashboard.module.css";
import { fetchPet } from "@/app/lib/data";
import { auth } from "@/auth";
import { CreateResquest } from "@/app/lib/actions";

const CreateAdoptionRequest = async ({ params }) => {
  const { id } = await params;
  const pet = await fetchPet(id);
  const { user } = await auth();

  return (
    <div className={styles.home_container}>
      <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Adopt a Pet !
            </h2>
            <form
              action={CreateResquest}
              className="grid max-w-2xl mx-auto mt-8"
            >
              <div className="items-center mt-8 sm:mt-14 ">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <input
                      type="hidden"
                      id="uid"
                      name="uid"
                      value={user._id}
                      className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    />
                    <input
                      type="hidden"
                      id="pid"
                      name="pid"
                      value={pet._id}
                      className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    />

                    <label
                      htmlFor="breed"
                      className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                      Breed
                    </label>
                    <input
                      type="text"
                      id="breed"
                      name="breed"
                      className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder={pet?.breed ?? ""}
                      disabled
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder={pet?.name || ""}
                      disabled
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium  dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm   rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                    placeholder="Tell us why you want to adopt this pet"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Submit
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

export default CreateAdoptionRequest;
