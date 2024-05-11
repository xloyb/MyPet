import React from "react";
import styles from "../dashboard.module.css";
import MatingPets from "@/components/MatingPets";
import { fetchMatingPets } from "@/app/lib/data";
import { auth } from "@/auth";
import Link from "next/link";


const PetsMatingList = async ({ dashboard }) => {
  const matingpets = await fetchMatingPets();
  return (
    <div className={styles.home_container}>
      <div className={styles.top}>
        <Link href="/dashboard/mating/addmating">
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>
      <div
        className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {" "}

        {matingpets.map((p) => (
          <MatingPets
            p={p} />
        ))}

      </div>
    </div>
  );
};

export default PetsMatingList;
