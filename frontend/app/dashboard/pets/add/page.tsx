import React from 'react'
import styles from '../../dashboard.module.css';

const Page = () => {
    return (
        <div className={styles.home_container}>
            <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Add User</h2>

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                                <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Bordered avatar" />

                                <div className="flex flex-col space-y-5 sm:ml-8">
                                    <button type="button"
                                        className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                        Change picture
                                    </button>
                                    <button type="button"
                                        className="py-3.5 px-7 text-base font-medium  focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                        Delete picture
                                    </button>
                                </div>
                            </div>

                            <div className="items-center mt-8 sm:mt-14 ">

                                <div
                                    className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium  dark:text-white">
                                            first name</label>
                                        <input type="text" id="first_name"
                                            className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder=" first name" value="Jane" required />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="last_name"
                                            className="block mb-2 text-sm font-medium  dark:text-white">
                                            last name</label>
                                        <input type="text" id="last_name"
                                            className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder=" last name" value="Ferguson" required />
                                    </div>

                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <label htmlFor="email"
                                        className="block mb-2 text-sm font-medium  dark:text-white">
                                        email</label>
                                    <input type="email" id="email"
                                        className=" border border-indigo-300  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder=".email@mail.com" required />
                                </div>

                                <select name="isAdmin" id="isAdmin" className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="false">
                                        Is Admin?
                                    </option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                                <select name="isActive" id="isActive" className="block w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="true">
                                        Is Active?
                                    </option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>


                                <div className="mb-6">
                                    <label htmlFor="message"
                                        className="block mb-2 text-sm font-medium  dark:text-white">Bio</label>
                                    <textarea id="message" rows={4}
                                        className="block p-2.5 w-full text-sm   rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                                        placeholder="Write  bio here..."></textarea>
                                </div>

                                <div className="flex justify-end">
                                    <button type="submit"
                                        className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page