import React from "react";
import InstagramImg from "./InstagramImg";
import Data from "../seeds/data.json";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24 ">
      <p className="text-2xl font-bold">Follow Us On Instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {Data.instagram.images?.map((img, index) => {
            return(
                <div key={index} className='relative'>
      <Image
        src={img}
        alt='/'
        className='w-full h-full'
        width='870'
        height='750'
        layout='responsive'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        <FaInstagram size={30} className='z-10' />
      </p>
      </div>
    </div>
                        )
        })}
      </div>
    </div>
  );
};

export default Instagram;
