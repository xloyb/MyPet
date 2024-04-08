import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import styles from '@/app/dashboard/dashboard.module.css'
import { IoIosNotifications } from 'react-icons/io';


const ModCp = async () => {
    const { user } = await auth();
    if (!user.isAdmin && !user.isTeam) {
        redirect("/dashboard/403")
    }
    return (


        <div className={styles.home_container}>

            <div >
                <div className="stats shadow w-max	">

                    <div className="stat">
                        <div className="stat-figure text-primary text-5xl font-bold">
                        <IoIosNotifications />

                        </div>
                        
                        <div className="stat-value text-primary">Create a global notification</div>
                        <br/>
                        <form>
                        <textarea className="w-max textarea textarea-primary" placeholder="Bio"></textarea>
                        <button>Submit</button>
                        </form>

                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default ModCp