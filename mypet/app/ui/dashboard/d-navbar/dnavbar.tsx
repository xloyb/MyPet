"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Dnavbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl uppercase">
            {" "}
            {pathname.split("/").pop()}{" "}
          </a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dnavbar;
