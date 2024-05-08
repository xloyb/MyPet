import React from "react";
import styles from "../dashboard.module.css";
import PetCard from "@/components/PetCard";
import { fetchPets } from "@/app/lib/data";
import { auth } from "@/auth";
const PetsList = async ({ dashboard }) => {
  const pets = await fetchPets();
  const { user } = await auth();
  // console.log("useryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  // console.log(user);
  return (
    <div className={styles.home_container}>
      <div
        className={`content-center grid grid-cols-1 md:grid-cols-2 ${
          dashboard ? "" : "lg:grid-cols-3"
        }`}
      >
        {" "}
        {pets.map((pet) => (
          <PetCard
            pid={pet._id}
            title={pet.name}
            //  imageUrl={pet.img || "/images/default-Pet.png"}
            imageUrl={pet.img ? `/img/${pet.img}` : "/images/default-Pet.png"}
            description={pet.desc} uid={undefined} added={pet.added}  />
        ))}
      </div>
    </div>
  );
};

export default PetsList;
