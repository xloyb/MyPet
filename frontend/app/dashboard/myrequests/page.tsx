import { fetchPet, fetchUserRequests } from '@/app/lib/data';
import { auth } from '@/auth'
import Link from 'next/link';
import React from 'react'
import styles from '@/app/dashboard/dashboard.module.css'
import { DeleteMyRequest } from '@/app/lib/actions';

const RequestsPage = async () => {
  
  const { user } = await auth();

  const AdoptionRequests = await fetchUserRequests(user._id);

  return (
    <div>
      <div className={styles.home_container}>
        <div className={styles.top}>
          <h2 className="text-xl font-bold">Our organization's staff team oversees the processing of pet adoption requests, which are not automated.</h2>
        </div>
     
        {AdoptionRequests.map(async (ar) => {
          const pet = await fetchPet(ar.pet.toString());
          //  console.log("testing pet id")
          //  console.log(ar.pet.toString())
          //  console.log(pet)

          return (
            <div className='pt-10'>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='max-w-md'><img src={pet.img || "/images/default-pet.png"} alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="text-5xl font-bold">{pet?.breed} - {pet?.name} </h2>
                  <p className='text-5xl font-bold'></p>
                  <p className='py-6'>{ar.message}</p>
                  <span className={`inline-block rounded-lg px-3 py-1 text-center ${ar.status === "approved" ? 'bg-green-500 text-white' : ar.status === "pending" ? 'bg-yellow-500 text-black' : ar.status === "rejected" ? 'bg-red-500 text-white' : ''}`}>{ar.status}</span>


                  <form action={DeleteMyRequest}>
                    <input type='hidden' value={ar._id} name='id'></input>
                    <input type='hidden' value={user._id} name='suid'></input>
                    <input type='hidden' value={ar.user.toString()} name='uid'></input>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" >Cancel Request</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default RequestsPage;
