import React from "react";
import styles from "../dashboard.module.css";
import Lostpet from "@/components/Lostpet";
import { fetchlostpets } from "@/app/lib/data";
import { auth } from "@/auth";

const PetsList = async ({ dashboard }) => {
  const lostpets = await fetchlostpets();
  return (
    <div className={styles.home_container}>
      <div
        className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {" "}

        {lostpets.map((p) => (
          <Lostpet
            p={p} />
        ))}

      </div>
    </div>
  );
};

export default PetsList;
