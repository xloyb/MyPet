import React from 'react'
import styles from '../dashboard.module.css';
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchPets } from '@/app/lib/data'
import { deletPet } from '@/app/lib/actions';

const PetsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const pets = await fetchPets(q);
  return (
    <div className={styles.home_container}>
      <div className={styles.top}>
        <Search placeholder="Search for pet ..." />
        <Link href="/dashboard/pets/add">
          <button className="btn btn-primary">add new pet</button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">

            <thead>
              <tr>

                <th>Breed / Name</th>
                <th>Description</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {pets.map(pet => (

                <tr key={pet.id}>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={pet.img || "/images/Default.png"} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{pet.breed}</div>
                        <div className="text-sm opacity-50">{pet.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {pet.phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">{pet.desc}</span>
                  </td>
                  <th className='flex'>

                  <Link href={`/dashboard/pets/${pet.id}`}>
                    <button className="btn btn-success">
                      Update
                    </button>
                  </Link>


                    
                  <form action={deletPet}>
                    <input type='hidden' name='id' value={pet.id}></input>
                    <button type='submit' className="btn btn-error">Delete</button>
                  </form>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default PetsPage