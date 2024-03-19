'use client';

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.';


const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
      };
    return (
        <div className='Hero'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Open your heart and home to a furry friend in need. Adopt, don't shop!</h1>
                        <p className="py-6">Make your home complete with the love of a rescue pet. Adopt today and be a part of their happily ever after.</p>
                        
                        <CustomButton
          title="Adobt !"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero