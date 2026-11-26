import React from 'react'
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className='relative min-h-[720px] h-screen bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }}
      id='Header'>
        
        <Navbar/>
        <div className='absolute inset-0 hero-overlay' />
        <motion.div
        initial = {{opacity:0 , y:40}}
        transition = {{duration: 1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once: true}}
         className='container relative mx-auto px-6 md:px-12 lg:px-20 text-white'>
            <p className='section-kicker mb-6 text-[#e7c7a5]'>Curated living, beautifully considered</p>
            <h1 className='font-display text-5xl leading-[1.04] sm:text-6xl md:text-8xl max-w-4xl'>Find a place that feels <i>entirely</i> yours.</h1>
            <p className='mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg'>We pair thoughtful local expertise with an uncompromising eye for homes worth coming back to.</p>

            <div className='flex flex-wrap gap-4 mt-10'>
                <a href="#Projects" className='rounded-full bg-[#e7c7a5] px-7 py-3.5 font-semibold text-[#17324a] transition hover:bg-white'>Explore residences <span aria-hidden='true'>↗</span></a>
                <a href="#Contact" className='rounded-full border border-white/70 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-[#17324a]'>Talk to an advisor</a>
            </div>
            
        </motion.div>
    </div>
  );
}

export default Header
