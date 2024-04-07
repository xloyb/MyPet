import { fetchAllRequests, fetchPet, fetchUser } from "@/app/lib/data";
import React from "react";
import styles from "@/app/dashboard/dashboard.module.css";
import { ManageRequest } from "@/app/lib/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ManageRequests = async () => {

  const {user} = await auth();
  if(!user.isAdmin && !user.isTeam){
    redirect("/dashboard/403")
  }



  const allrequests = await fetchAllRequests();
   //console.log(allrequests);
  return (
    <div>
      <div className={styles.home_container}>
        <div className={styles.top}>
          <h2 className="text-xl font-bold">Manage Requests</h2>
        </div>

        {allrequests.map(async (ar) => {
          const user = await fetchUser(ar.user.toString());
          const pet = await fetchPet(ar.pet.toString());
          //  console.log("testing pet id")
            console.log(ar.pet.toString())
            console.log(pet)

          return (
            <div className="pt-10">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-md">
                  <img src={pet.img || "/images/default-pet.png"} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="text-5xl font-bold">
                    {pet.breed} - {pet.name}{" "}
                  </h2>
                  <p className="text-xl font-bold"></p>
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="avatar"
                          src={user.img || "/images/Default.png"}
                        />
                      </div>
                    </div>
                    <div className="chat-bubble">{ar.message}</div>
                  </div>

                  <div className="overflow-hidden shadow rounded-lg border">
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium  ">Full name</dt>
                          <dd className="mt-1 text-sm   sm:mt-0 sm:col-span-2">
                            {user.username}
                          </dd>
                        </div>
                        {/* <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium  ">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm   sm:mt-0 sm:col-span-2">
                        {user.email}
                        </dd>
                    </div> */}
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium  ">
                            Phone number
                          </dt>
                          <dd className="mt-1 text-sm   sm:mt-0 sm:col-span-2">
                            {user.phone}
                          </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium  ">Address</dt>
                          <dd className="mt-1 text-sm   sm:mt-0 sm:col-span-2">
                            {user.address}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <span
                    className={`inline-block rounded-lg px-3 py-1 text-center ${
                      ar.status === "approved"
                        ? "bg-green-500 text-white"
                        : ar.status === "pending"
                        ? "bg-yellow-500 text-black"
                        : ar.status === "rejected"
                        ? "bg-red-500 text-white"
                        : ""
                    }`}
                  >
                    {ar.status}
                  </span>

                  <form action={ManageRequest}>
                    <input type="hidden" name="id" value={ar._id}/>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      name="status"
                    >
                      <option value="" disabled selected>
                        -- Select --
                      </option>
                      <option value="approved">Approve</option>
                      <option value="pending">Mark as Pending</option>
                      <option value="rejected">Cancel</option>
                    </select>

                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageRequests;
