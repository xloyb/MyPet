import React from "react";
import styles from "./notification.module.css";
import { IoIosNotifications } from "react-icons/io";
import { fetchNotif } from "@/app/lib/data";

const Notification = async () => {
  const notif = await fetchNotif();

  return (
    <div className={styles.home_container}>
      {notif ? (
        <div role="alert" className="alert alert-success">
          <IoIosNotifications className="stroke-current shrink-0 h-6 w-6" />
          <span>{notif.message}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
