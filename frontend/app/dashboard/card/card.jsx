import React from 'react'
import { LuUsers2 } from "react-icons/lu";

const Card = () => {
  return (
    <div>
      <div className="card w-64 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> <LuUsers2 />Total Users</h2>
    <span>100k</span>
  </div>
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
</div>
    </div>
  )
}

export default Card