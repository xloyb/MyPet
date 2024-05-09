import React from "react";
import styles from "../dashboard.module.css";
import VetStore from "@/components/vet_store";
import { fetchVeterinaries } from "@/app/lib/data";
import { auth } from "@/auth";

const PetsList = async ({ dashboard }) => {
  const vets = await fetchVeterinaries();
  const { user } = await auth();
console.log(vets)
  return (
    <div className={styles.home_container}>
      <div
        className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {" "}

        {vets.map((p) => (
          <VetStore
            p={p} />
        ))}

      </div>
    </div>
  );
};

export default PetsList;
