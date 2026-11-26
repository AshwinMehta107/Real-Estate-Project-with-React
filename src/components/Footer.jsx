import { assets } from '../assets/assets.js'

const Footer = () => (
  <footer className='w-full overflow-hidden bg-[#102a43] px-6 pt-16 md:px-12 lg:px-20' id='Footer'>
    <div className='container mx-auto grid gap-12 md:grid-cols-[1.25fr_.65fr_1fr]'>
      <div>
        <img src={assets.logo_dark} alt='Aster & Co.' className='h-8 w-auto' />
        <p className='mt-6 max-w-sm leading-7 text-slate-300'>Thoughtful guidance for people looking for more than square footage. Find a home that supports the life you want to lead.</p>
      </div>
      <div>
        <h3 className='mb-5 text-sm font-bold uppercase tracking-[.15em] text-white'>Explore</h3>
        <ul className='space-y-3 text-slate-300'>
          <li><a href='#Header' className='transition hover:text-[#e7c7a5]'>Home</a></li>
          <li><a href='#About' className='transition hover:text-[#e7c7a5]'>Our approach</a></li>
          <li><a href='#Projects' className='transition hover:text-[#e7c7a5]'>Residences</a></li>
          <li><a href='#Contact' className='transition hover:text-[#e7c7a5]'>Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className='mb-5 text-sm font-bold uppercase tracking-[.15em] text-white'>Notes from Aster</h3>
        <p className='mb-5 max-w-80 leading-6 text-slate-300'>Occasional property inspiration and local insights, delivered with care.</p>
        <form className='flex border-b border-white/30 pb-2' onSubmit={(event) => event.preventDefault()}>
          <input type='email' aria-label='Email address' placeholder='Your email address' className='min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400' />
          <button className='text-sm font-semibold text-[#e7c7a5] transition hover:text-white' type='submit'>Subscribe →</button>
        </form>
      </div>
    </div>
    <div className='container mx-auto mt-14 flex flex-col gap-2 border-t border-white/15 py-6 text-sm text-slate-400 sm:flex-row sm:justify-between'>
      <p>© 2026 Aster & Co. All rights reserved.</p>
      <p>Made for considered living.</p>
    </div>
  </footer>
)

export default Footer
