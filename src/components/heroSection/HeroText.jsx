import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <h2 className='lg:text:2xl sm:text-xl uppercase text-cyan'>Software Engineer</h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Shavmiyan Vijayakumar</h1>
        <p className='text-lg mt-4 text-white'>A Passionate Software Engineer And <br/> A Fullstack Developer.</p>
    </div>
  )
}

export default HeroText