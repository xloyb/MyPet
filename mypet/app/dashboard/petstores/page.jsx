import React from "react";
import styles from "../dashboard.module.css";
import VetStore from "@/components/vet_store";
import { fetchPetStores } from "@/app/lib/data";
import { auth } from "@/auth";

const fetchPetStores = async () => {
  const ps = await fetchPetStores();
  const { user } = await auth();
  console.log(ps);
  return (
    <div className={styles.home_container}>
      <div
        className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {" "}


        {ps.map((p) => (
          <VetStore
            p={p} />
        ))}


      </div>
    </div>
  );
};

export default fetchPetStores;
