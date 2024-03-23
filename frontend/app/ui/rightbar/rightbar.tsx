import React from 'react';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import Image from 'next/image';
import puppy from '../../../public/images/puppy.png';

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="bg-gradient-to-t from-blue-900 to-blue-800 p-6 rounded-lg mb-6 relative">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image src={puppy} alt="xLoy" fill className="object-contain opacity-20" />
        </div>
        <div className="text-white">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="text-lg font-semibold mt-2">
            How to adopt a pet?
          </h3>
          <span className="text-sm font-semibold mt-1">Takes 4 minutes to learn</span>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
            perspiciatis recusandae possimus.
          </p>
          <button className="bg-blue-600 text-white rounded-md py-2 px-4 flex items-center mt-3">
            <MdPlayCircleFilled className="mr-2" />
            Watch
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-blue-900 to-blue-800 p-6 rounded-lg mb-6 text-white">
        <div className="text">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="text-lg font-semibold mt-2">
            New server actions are available, partial pre-rendering is coming up!
          </h3>
          <span className="text-sm font-semibold mt-1">Boost your productivity</span>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
            perspiciatis recusandae possimus.
          </p>
          <button className="bg-blue-600 text-white rounded-md py-2 px-4 flex items-center mt-3">
            <MdReadMore className="mr-2" />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
