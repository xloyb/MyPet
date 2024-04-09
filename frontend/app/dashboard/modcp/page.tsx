import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import styles from "@/app/dashboard/dashboard.module.css";
import { IoIosNotifications } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import {
  addAnnouncement,
  addNotification,
  deletAnnouncement,
  deleteAnnouncements,
  deleteNotification,
} from "@/app/lib/actions";
import { fetchAllAnnouncements } from "@/app/lib/data";

const ModCp = async () => {
  const { user } = await auth();
  if (!user.isAdmin && !user.isTeam) {
    redirect("/dashboard/403");
  }

  const announcements = await fetchAllAnnouncements();

  return (
    <div className={styles.home_container}>
      <section className="mb-20 border-solid border-2 border-slate-700 rounded-2xl">
        <div className="h-28 flex items-center justify-center">
          <button className="btn btn-outline btn-info mr-3">Info</button>
          <button className="btn btn-outline btn-success mr-3">Success</button>
          <button className="btn btn-outline btn-warning mr-3">Warning</button>

          <form action={deleteNotification}>
            <button className="btn btn-outline btn-error mr-3">
              Disable Notifications
            </button>
          </form>
          <form action={deleteAnnouncements}>
            <button className="btn btn-outline btn-error mr-3">
              Delete Announcements
            </button>
          </form>
        </div>
      </section>

      <section className="mb-20	border-solid border-2 border-slate-700 rounded-2xl">
        <div className="shadow">
          <div className="">
            <div className="stat-figure text-primary text-5xl font-bold">
              <div className="stat-value text-primary ">
                {" "}
                <span className="flex">
                  {" "}
                  <IoIosNotifications className="mr-3" /> Create a global
                  notification :{" "}
                </span>{" "}
              </div>
            </div>

            <br />
            <form action={addNotification}>
              <textarea
                className="w-full textarea border-slate-700"
                name="notification"
                placeholder="Notification text..."
              ></textarea>
              <div className="flex justify-end">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="mb-20	border-solid border-2 border-slate-700 rounded-2xl">
        <div className="shadow">
          <div className="">
            <div className="stat-figure text-primary text-5xl font-bold">
              <div className="stat-value text-primary ">
                {" "}
                <span className="flex">
                  {" "}
                  <GrAnnounce className="mr-3" /> Create an announcement :{" "}
                </span>{" "}
              </div>
            </div>

            <br />
            <form action={addAnnouncement}>
              <textarea
                className="w-full textarea border-slate-700"
                name="announcement"
                placeholder="Announcement"
              ></textarea>

              <div>
                <div className="collapse collapse-plus border border-base-300">
                  <input type="checkbox" className="peer" />

                  <div className="collapse-title flex items-center">
                    {" "}
                    Add a button to the announcement?{" "}
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li className="text-error">
                        Leave it empty if you dont want a button with the
                        announcment.
                      </li>
                      <input
                        type="text"
                        className="w-full textarea border-slate-700"
                        name="buttonLink"
                        placeholder="Example : https://MyDevify.com"
                      ></input>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-20	border-solid border-2 border-slate-700 rounded-2xl">
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Message</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {announcements.map((ann) => (
                  <tr key={ann._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">#</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {ann.message}
                      <br />
                      <span className="badge badge-ghost badge-sm">MyPet</span>
                    </td>

                    <th>
                      <form action={deletAnnouncement}>
                        <input type="hidden" name="id" value={ann.id}></input>
                        <button
                          type="submit"
                          className="btn btn-outline btn-warning mr-3"
                        >
                          Delete
                        </button>
                      </form>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModCp;
