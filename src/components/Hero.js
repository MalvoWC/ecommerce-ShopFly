import React from 'react';
import { Link } from 'react-router-dom';
import ManImg from '../img/black_man.svg'

const Hero = () => {

  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className=' container mx-auto flex justify-around h-full text-white'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-primary mr-3'></div>New Trend
          </div>
          {/* title */}
          <h1 className='text-[50px] lg:text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>MENS/WOMENS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block w-[500px] justify-center items-center'>
          <img src={ManImg} alt='' />
        </div>
      </div>
    </section>
  )
};

export default Hero;
