import { auth, signOut } from "@/auth";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="flex items-center p-2.5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={user.img || "/images/Default.png"}
                  alt="User Avatar"
                />
              </div>
            </div>
            <div className="ml-4">
              <div className="font-semibold">
                {user.username}{" "}
                {user.isAdmin && (
                  <span className="text-xs text-gray-500 ml-1">(Admin)</span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-gray-500 ml-1">{user.phone}</div>
                <div className="text-xs text-gray-500 ml-1">{user.email}</div>
              </div>
            </div>
          </div>

          {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
       
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul> */}

          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="collapse collapse-plus border border-base-300">
              <input type="checkbox" className="peer" />

              <div className="collapse-title flex items-center font-bold uppercase">
                {" "}
               
                Profile
              </div>
              <div className="collapse-content">
                <ul>

                  <Link href="/dashboard/users">
                    <li className="font-medium ml-4 w-10 flex ">
                      <span>
                        <CgProfile className="mr-1" />
                        Profile
                      </span>
                    </li>
                  </Link>

                  <Link href="/dashboard/users">
                    <li className="font-medium ml-4 w-10 flex ">
                      <span>
                        <CgProfile className="mr-1" />
                        Settings
                      </span>
                    </li>
                  </Link>


                </ul>
              </div>
            </div>


            <div className="contents w-10 mb-3 avatar">
              <li className="font-bold uppercase flex">

                <span>Adoption</span>
              </li>
              <Link href="/dashboard/petslist">
                <li className="font-medium ml-8 ">

                  <span><CgProfile className="mr-1" /> Pets List</span>
                </li>
              </Link>
              <Link href="/dashboard/users">
                <li className="font-medium ml-8 flex ">

                  <span><CgProfile className="mr-1" /> Adoption Requests </span>
                </li>
              </Link>

            </div>



            <div className="contents w-10 mb-3 avatar">
              <li className="font-bold uppercase flex">

                <span>Admin Area</span>
              </li>
              <Link href="/dashboard/petslist">
                <li className="font-medium ml-8 ">

                  <span><CgProfile className="mr-1" /> Users List</span>
                </li>
              </Link>
              <Link href="/dashboard/pets">
                <li className="font-medium ml-8 flex ">

                  <span><CgProfile className="mr-1" /> Pets List </span>
                </li>
              </Link>

              <Link href="/dashboard/users/add">
                <li className="font-medium ml-8 ">

                  <span><CgProfile className="mr-1" /> Add User</span>
                </li>
              </Link>
              <Link href="/dashboard/pets/add">
                <li className="font-medium ml-8 flex ">

                  <span><CgProfile className="mr-1" /> Add Pet </span>
                </li>
              </Link>

            </div>



            <div className="contents w-10 mb-3 avatar">
              <li className="font-bold uppercase flex">

                <span>MyPet Development</span>
              </li>
              <Link target="_blank" href="https://helpdesk.mydevify.com/tickets/create_new">
                <li className="font-medium ml-8 ">

                  <span><CgProfile className="mr-1" /> Report a Bug</span>
                </li>
              </Link>
              <Link target="_blank" href="https://helpdesk.mydevify.com/tickets/create_new">
                <li className="font-medium ml-8 flex ">

                  <span><CgProfile className="mr-1" /> Suggest</span>
                </li>
              </Link>

            </div>







            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button>logouttt</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
