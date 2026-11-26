import { useEffect, useState } from 'react'
import {assets, projectsData } from '../assets/assets';
import { motion } from 'motion/react';

const Projects = () => {

   const [currentIndex ,setCurrentIndex ] = useState(0);
   const [cardsToShow , setCardsToShow] = useState(() =>
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
   );
  
   useEffect(() => {
      const updateCardsToShow = () => {
         const nextCardsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
         setCardsToShow((current) =>
            current === nextCardsToShow ? current : nextCardsToShow
         );
      };

      window.addEventListener('resize', updateCardsToShow);

      return () => window.removeEventListener('resize', updateCardsToShow);
   }, []);

   const lastIndex = Math.max(projectsData.length - cardsToShow, 0);

   const nextProject = () => {
      setCurrentIndex((prevIndex) => {
         const index = Math.min(prevIndex, lastIndex);
         return index === lastIndex ? 0 : index + 1;
      });
   }


   const prevProject = () => {
      setCurrentIndex((prevIndex) => {
         const index = Math.min(prevIndex, lastIndex);
         return index === 0 ? lastIndex : index - 1;
      });
   }
  

  return (
    <motion.div
      initial={{ opacity: 0, x: -200}}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}

      className='container mx-auto py-24 px-6 md:px-12 lg:px-20 w-full overflow-hidden'
      id='Projects'
    >
      <div className='flex flex-col items-center text-center'>
        <p className='section-kicker mb-4'>Selected residences</p>
        <h2 className='font-display text-4xl sm:text-5xl'>Spaces with a sense of place.</h2>
        <p className='mt-4 max-w-md leading-7 text-slate-500'>A selection of homes defined by light, character, and connection to their surroundings.</p>
      </div>

      {/* Slider Buttons */}

      <div className='flex justify-end items-center gap-2 mb-8'>
        <button
          onClick={prevProject}
          className='rounded-full border border-slate-200 p-3 transition hover:border-[#18324a] hover:bg-[#18324a] hover:brightness-0 hover:invert'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>

        <button
          onClick={nextProject}
          className='rounded-full border border-slate-200 p-3 transition hover:border-[#18324a] hover:bg-[#18324a] hover:brightness-0 hover:invert'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* project slider container  */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-5 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${(Math.min(currentIndex, lastIndex) * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <article key={index} className='group relative flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]'>
              <img
                src={project.image}
                alt={project.title}
                className='h-[390px] w-full object-cover transition duration-500 group-hover:scale-[1.02]'
              />

              <div className='absolute inset-x-0 bottom-0 flex justify-center px-4'>
                <div className='w-full translate-y-5 bg-white px-5 py-5 shadow-lg transition duration-300 group-hover:translate-y-2'>
                  <p className='mb-1 text-xs font-bold uppercase tracking-[.16em] text-[#bd7b46]'>For sale</p>
                  <h3 className='font-display text-2xl text-[#18324a]'>
                    {project.title}
                  </h3>

                  <p className='mt-1 text-sm text-slate-500'>
                    {project.price} <span className='px-1 text-[#bd7b46]'>•</span> {project.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects
