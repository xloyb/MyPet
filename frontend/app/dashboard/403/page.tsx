import React from 'react'
import { MdAdminPanelSettings } from "react-icons/md";


const Forbidden = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
  
    <div>
      <h1 className=" flex text-5xl font-bold">  <MdAdminPanelSettings  /> Access Denied.  </h1>
      <p className="py-6"></p>
      <a href='https://helpdesk.mydevify.com/' target='_blank' className='ml-8 mt-4 btn btn-primary'> Report a problem</a>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default Forbidden