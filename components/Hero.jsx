import React from 'react'

const Hero = ({hero, work}) => {

  return (
    <div id='home'  className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img '>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{hero?.heading}  {work?.heading} </h2>
            <p className='py-5 text-xl'>{hero?.message}  {work?.message} </p>
            <button className='px-8 py-2 border'> {hero?.button}  {work?.button}</button>
        </div>
    </div>
  )
}

export default Hero