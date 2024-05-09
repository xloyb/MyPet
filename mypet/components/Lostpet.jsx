import Link from "next/link";
import React from "react";




const Lostpet = ({p}) => {
  return (
    <div
     key={p.id}
      className="mt-6 card card-compact w-80 bg-base-100 shadow-xl" 
    >
      <figure>
        <img src={p.img ? `/img/${p.img}` : "/images/default-Pet.png"} alt="image" />
      </figure>
      <div className="card-body">
      <div className="badge badge-outline">{p.name}</div>
        <div className="badge badge-outline">{p.breed}</div>
        <div className="badge badge-outline">{p.phone}</div>
        <div className="badge badge-outline">{p.lostDate}</div>

        <p> {p.desc} </p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Contact</button>
            
        </div>
      </div>
    </div>
  );
};

export default Lostpet;
