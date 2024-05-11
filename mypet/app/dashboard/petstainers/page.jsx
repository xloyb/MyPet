import React from "react";
import styles from "../dashboard.module.css";
import Trainers from "@/components/Trainers";
import { fetchTrainer } from "@/app/lib/data";
import { auth } from "@/auth";
import Link from "next/link";


const TrainersList = async ({ dashboard }) => {
  const trainers = await fetchTrainer();
  return (
    <div className={styles.home_container}>
      <div className={styles.top}>
   
      </div>
      <div
        className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {" "}

        {trainers.map((p) => (
          <Trainers
            p={p} />
        ))}

      </div>
    </div>
  );
};

export default TrainersList;
