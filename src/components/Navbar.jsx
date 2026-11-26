import { useEffect, useState } from 'react'
import {assets} from '../assets/assets.js'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
   if(showMobileMenu){
      document.body.style.overflow = 'hidden'
   }else{
       document.body.style.overflow = 'auto'
   }
   return () => {
        document.body.style.overflow = 'auto'
   };
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-20'>
      <div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-12 lg:px-20'>
        <a href='#Header' aria-label='Aster & Co. home'><img src={assets.logo} alt='Aster & Co.' className='h-8 w-auto' /></a>
        <ul className='hidden md:flex items-center gap-8 text-sm text-white/90'>
          <a href='#Header' className='nav-link'>
            Home
          </a>

          <a href='#About' className='nav-link'>
            About
          </a>

          <a href='#Projects' className='nav-link'>
            Residences
          </a>

          <a
            href='#Testimonials'
            className='nav-link'
          >
            Testimonials
          </a>
        </ul>

        <a href='#Contact' className='hidden md:inline-flex bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-[#17324a] transition hover:bg-[#e7c7a5]'>Book a viewing</a>

        <button
          type='button'
          onClick={() => setShowMobileMenu(true)}
          className='md:hidden rounded-full bg-white/15 p-2'
          aria-label='Open navigation menu'
        >
          <img src={assets.menu_icon} className='w-7' alt='' />
        </button>
      </div>

      {/* mobile menu */}

      <div
        className={`md:hidden ${showMobileMenu ? "fixed w-full opacity-100" : "h-0 w-0 opacity-0"} right-0 top-0 bottom-0 overflow-hidden bg-[#fbfaf7] transition-all duration-300`}
      >
        <div className='flex justify-end p-6 cursor-pointer'>
          <button
            type='button'
            onClick={() => setShowMobileMenu(false)}
            aria-label='Close navigation menu'
          >
            <img src={assets.cross_icon} className='w-6' alt='' />
          </button>
        </div>

        <ul className='flex flex-col items-center gap-3 mt-14 px-5 text-xl font-medium text-[#18324a]'>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Header'
            className='px-4 py-2 rounded-full inline-block'
          >
            Home
          </a>

          <a
            onClick={() => setShowMobileMenu(false)}
            href='#About'
            className='px-4 py-2 rounded-full inline-block'
          >
            About
          </a>

          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Projects'
            className='px-4 py-2 rounded-full inline-block'
          >
            Projects
          </a>
          <a onClick={() => setShowMobileMenu(false)} href='#Contact' className='mt-5 rounded-full bg-[#18324a] px-6 py-3 text-base text-white'>Book a viewing</a>

          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Testimonials'
            className='px-4 py-2 rounded-full inline-block'
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar



