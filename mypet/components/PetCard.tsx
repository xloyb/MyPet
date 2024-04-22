import Link from "next/link";
import React from "react";

interface PetCardProps {
  title: string;
  imageUrl: string;
  description: string;
  pid?: String;
  uid?: String;
}

const PetCard: React.FC<PetCardProps> = ({
  title,
  imageUrl,
  description,
  pid,
  uid,
}) => {
  return (
    <div
      key={pid}
      className="mt-6 card card-compact w-80 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/dashboard/myrequests/${pid}`}>
            <button className="btn btn-primary">Adopt</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
