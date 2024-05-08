import Link from "next/link";
import React from "react";



const Vet_Store = () => {
  return (
    <div
     key="test"
      className="mt-6 card card-compact w-80 bg-base-100 shadow-xl" 
    >
      <figure>
        <img src="http://localhost:3000/img/MyPet_AhJtjHmanage_post.PNG" alt="dfdf" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">test</h2>
        <p>PetCard</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Contact</button>
            
        </div>
      </div>
    </div>
  );
};

export default Vet_Store;
