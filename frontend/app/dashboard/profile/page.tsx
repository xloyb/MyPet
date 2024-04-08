import { fetchUserByUsername } from '@/app/lib/data'
import { auth } from '@/auth'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

const MyProfile = async () => {

  const { user } = await auth();


  return (
    <div>
      <div>
        <div className="container mx-auto mt-8 p-4  rounded-lg shadow-md">
          <div
            className="flex-1 relative mb-6 h-32"
            style={{
              backgroundImage: "https://via.placeholder.com/800x400",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0.5rem",
            }}
          >
            <div className="flex items-center justify-center h-full p-4">
              <img src={user?.img ? `${user.img}` : "https://via.placeholder.com/80"}
                alt="Profile Picture"
                className="w-20 h-20 rounded-full border-4 border-white bg-white"
              />
            </div>
          </div>

          <div className="navbar bg-base-100">
            <div className="navbar-start space-x-4">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a target="_blank" href="">
                      {" "}
                      Item{" "}
                    </a>
                  </li>
                  <li>
                    <a> Item </a>
                  </li>
                </ul>
              </div>
              <a
                href=""
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />

              </a>
              <a
                href=""
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />

              </a>
              <a

                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />

              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Item 1</a>
                </li>

                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">

              <a href='/dashboard/settings'

                className="btn btn-primary"
              >
                Edit
              </a>



            </div>
          </div>



          <div className="stats shadow flex flex-wrap">

          <div className="stat w-full sm:w-1/2 md:w-1/4">
              <div className="stat-title">Admin</div>
              <div className="stat-value text-primary">{user.isAdmin ? 'Yes' : 'No'}</div>
            </div>

            <div className="stat w-full sm:w-1/2 md:w-1/4">
              <div className="stat-title">Moderator</div>
              <div className="stat-value text-primary">{user.isTeam ? 'Yes' : 'No'}</div>
            </div>

            <div className="stat w-full sm:w-1/2 md:w-1/4">
              <div className="stat-title">UserName</div>
              <div className="stat-value">{user.username}</div>
            </div>

            

            <div className="stat w-full sm:w-1/2 md:w-1/4">
              <div className="stat-title">Phone</div>
              <div className="stat-value">{user.phone}</div>
            </div>

            <div className="stat w-full sm:w-1/2 md:w-1/4">
              <div className="stat-title">Address</div>
              <div className="stat-value">{user.address}</div>
            </div>
            <div className="stat w-full sm:w-1/2 md:w-1/4">
              <div className="stat-title">Email</div>
              <div className="stat-value">{user.email}</div>
            </div>
            
          </div>

        </div>


      </div>
    </div>
  )
}

export default MyProfile