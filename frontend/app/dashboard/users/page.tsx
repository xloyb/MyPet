import React from 'react'
import styles from '../dashboard.module.css';
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import {fetchUsers} from '@/app/lib/data'
import { deletUser } from '@/app/lib/actions';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const UsersPage = async ({searchParams}) => {

const { user } = await auth();
if(!user.isAdmin){
redirect("/dashboard/403")
}

  const q = searchParams?.q || "";
  const users =  await fetchUsers(q);
  // console.log(users);
  return (
    <div className={styles.home_container}>
      <div className={styles.top}>
        <Search placeholder="Search for user ..." />
        <Link href="/dashboard/users/add">
          <button className="btn btn-primary">add new user</button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
          
            <thead>
              <tr>
                
                <th>Name</th>
                <th>Contact</th>
                
                <th></th>
              </tr>
            </thead>
            <tbody>
             {users.map(user=>(
               <tr key={user.id}>
                
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.img ? `/img/${user.img}` : "/images/Default.png"} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.username}</div>
                      <div className="text-sm opacity-50">{user.isAdmin ? 'Administrator' : 'User'}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.phone}
                  <br />
                  <span className="badge badge-ghost badge-sm">{user.address}</span>
                </td>
               
                <th className='flex'>

                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="btn btn-success">
                      Update
                    </button>
                  </Link>


                  <form action={deletUser}>
                    <input type='hidden' name='id' value={user.id}></input>
                    <button type='submit' className="btn btn-error">Delete</button>
                  </form>
                </th>
              </tr>
                ))}
              

            </tbody>
           
  

          </table>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}

export default UsersPage