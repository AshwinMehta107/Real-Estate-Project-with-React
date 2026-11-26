import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto px-6 py-24 md:px-12 lg:px-20 w-full overflow-hidden'
      id='About'
    >
      <p className='section-kicker mb-4'>Our approach</p>
      <h2 className='font-display text-4xl text-center sm:text-5xl mb-4'>More than a move. A meaningful beginning.</h2>
      <p className='text-slate-500 max-w-lg text-center mb-12 leading-7'>Deep local knowledge, clear advice, and a service shaped around the way you want to live.</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <div className='relative w-full sm:w-1/2 max-w-lg'>
        <img
          src={assets.brand_img}
          alt='Light-filled contemporary residence'
          className='w-full shadow-[18px_18px_0_#e7c7a5]'
        />
        </div>

        <div className='flex flex-col items-center md:items-start mt-12 md:mt-0 text-slate-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='font-display text-4xl text-[#18324a]'>10+</p>

              <p>Years of Excellence</p>
            </div>

            <div>
              <p className='font-display text-4xl text-[#18324a]'>12+</p>

              <p>Projects Completed</p>
            </div>

            <div>
              <p className='font-display text-4xl text-[#18324a]'>20M</p>

              <p>Mn. sq. Ft. Delivered</p>
            </div>

            <div>
              <p className='font-display text-4xl text-[#18324a]'>25</p>

              <p>Active listings</p>
            </div>
          </div>

          <p className='my-10 max-w-lg '>
            From first visit to final signature, we bring calm clarity to every decision. Our team knows the small details that turn a house into the right home.
          </p>
          <a href='#Contact' className='rounded-full bg-[#18324a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#bd7b46]'>Meet our team <span aria-hidden='true'>→</span></a>
        </div>
      </div>
    </motion.div>
  );
}

export default About
