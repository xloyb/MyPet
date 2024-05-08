import React from "react";
import styles from "../dashboard.module.css";
import VetStore from "@/components/vet_store";
import { fetchPets } from "@/app/lib/data";
import { auth } from "@/auth";

const PetsList = async ({ dashboard }) => {
  const pets = await fetchPets();
  const { user } = await auth();

  return (
    <div className={styles.home_container}>
      <div
        className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {" "}

        <VetStore/>
        <VetStore/>

      </div>
    </div>
  );
};

export default PetsList;
