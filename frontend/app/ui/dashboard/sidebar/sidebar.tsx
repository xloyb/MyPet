import { auth, signOut } from "@/auth";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSettings, CiTimer } from "react-icons/ci";
import { FaBug, FaThList } from "react-icons/fa";
import { FcApproval, FcIdea } from "react-icons/fc";
import { IoIosAddCircle, IoMdPersonAdd } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdDashboard,
  MdOutlineBugReport,
  MdOutlinePets,
} from "react-icons/md";

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className="h-screen overflow-hidden sticky top-0 z-30 overflow-x-hidden ">
      <div className="drawer lg:drawer-open h-full overflow-hidden	">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center sm:hidden">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side overflow-hidden	">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="flex items-center p-2.5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={user.img ? `/img/${user.img}` : "/images/Default.png"}
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
                {!user.isAdmin && user.isTeam && (
                  <span className="text-xs text-gray-500 ml-1">
                    (Moderator)
                  </span>
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
            {user.isAdmin && (
              <div>
                <div className="collapse collapse-plus border border-base-300">
                  <input type="checkbox" className="peer" />

                  <div className="collapse-title flex items-center">
                    {" "}
                    <MdAdminPanelSettings className="text-2xl mr-1" /> Admin
                    Controle Panel
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <Link href="/dashboard/users">
                        <li className="font-medium ml-8 ">
                          <span>
                            <FaThList className="mr-1" /> Users List
                          </span>
                        </li>
                      </Link>

                      <Link href="/dashboard/users/add">
                        <li className="font-medium ml-8 ">
                          <span>
                            <IoMdPersonAdd className="mr-1" /> Add User
                          </span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {user.isTeam && (
              <div className="collapse collapse-plus border border-base-300">
                <input type="checkbox" className="peer" />

                <div className="collapse-title flex items-center">
                  {" "}
                  <MdAdminPanelSettings className="text-2xl mr-1" /> Moderator
                  Controle Panel
                </div>
                <div className="collapse-content">
                  <ul>
                    <Link href="/dashboard/modcp">
                      <li className="font-medium ml-8 flex ">
                        <span>
                          <MdAdminPanelSettings className="mr-1" /> Mods
                          Controle Panel{" "}
                        </span>
                      </li>
                    </Link>

                    <Link href="/dashboard/pets">
                      <li className="font-medium ml-8 flex ">
                        <span>
                          <FaThList className="mr-1" /> Pets List{" "}
                        </span>
                      </li>
                    </Link>

                    <Link href="/dashboard/pets/add">
                      <li className="font-medium ml-8 flex ">
                        <span>
                          <IoIosAddCircle className="mr-1" /> Add Pet{" "}
                        </span>
                      </li>
                    </Link>

                    <Link href="/dashboard/managerequests">
                      <li className="font-medium ml-8 flex ">
                        <span>
                          <CgProfile className="mr-1" /> Manage Requests{" "}
                        </span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}

            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <h2 className="menu-title">Dashboard</h2>
                <ul>
                  <Link href="/dashboard">
                    <li>
                      <span>
                        <MdDashboard className="mr-1" />
                        Dashboard
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>

            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <h2 className="menu-title">Profile</h2>
                <ul>
                  <Link href="/dashboard/profile">
                    <li>
                      <span>
                        <CgProfile className="mr-1" />
                        Profile
                      </span>
                    </li>
                  </Link>

                  <Link href="/dashboard/settings">
                    <li>
                      <span>
                        <IoSettings className="mr-1" />
                        Settings
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>

            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <h2 className="menu-title">Adoption</h2>
                <ul>
                  <Link href="/dashboard/petslist">
                    <li>
                      <span>
                        <MdOutlinePets className="mr-1" /> Pets List
                      </span>
                    </li>
                  </Link>
                  <Link href="/dashboard/myrequests">
                    <li>
                      <span>
                        <FcApproval className="mr-1" /> Adoption Requests{" "}
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>

            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <h2 className="menu-title">MyPet Development</h2>
                <ul>
                  <Link
                    target="_blank"
                    href="https://helpdesk.mydevify.com/tickets/create_new"
                  >
                    <li>
                      <span>
                        <FaBug className="mr-1" /> Bug Report
                      </span>
                    </li>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://helpdesk.mydevify.com/tickets/create_new"
                  >
                    <li>
                      <span>
                        <FcIdea className="mr-1" /> Suggest
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>

            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="ml-8 mt-4 btn btn-primary">Logout</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
