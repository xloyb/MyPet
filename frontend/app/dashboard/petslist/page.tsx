
import React from 'react'
import styles from '../dashboard.module.css'
import PetCard from '@/components/PetCard'
import { fetchPets } from '@/app/lib/data'
const PetsList = async () => {

    const pets = await fetchPets();

  return (
    <div className={styles.home_container} >
        <div className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {pets.map(pet => (

         <PetCard
         title={pet.name}
         imageUrl={pet.img || "/images/default-Pet.png"}
         description={pet.desc}
       />

       ))}
        </div>
    </div>
  )
}

export default PetsList