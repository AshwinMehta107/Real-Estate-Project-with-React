import { useEffect, useState } from 'react'
import {assets, projectsData } from '../assets/assets';

const Projects = () => {

   const [currentIndex ,setCurrentIndex ] = useState(0);
   const [cardsToShow , setCardsToShow] = useState(() =>
      window.innerWidth >= 640 ? 4 : 1
   );

   useEffect(() => {
      const updateCardsToShow = () => {
         const nextCardsToShow = window.innerWidth >= 640 ? 4 : 1;
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
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id = 'Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects  <span>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces,Building Legacies-Explore Our Portfolio</p>

        {/* Slider Buttons */}


        <div className='flex justify-end items-center mb-8'>
          <button  onClick = {prevProject}
          className='p-3 bg-gray-200 rounded mr-2' aria-label = "Previous Project">
            <img src={assets.left_arrow} alt="Previous"/>
          </button>

          <button onClick={nextProject}
           className='p-3 bg-gray-200 rounded mr-2' aria-label = 'Next Project'>
            <img src={assets.right_arrow} alt="Next"/>
          </button>
        </div>


        {/* project slider container  */}
        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out'
           
           style = {{transform: `translateX(-${(Math.min(currentIndex, lastIndex) * 100 ) / cardsToShow}%)`}}
          >

          

            {projectsData.map((project, index)=>(
              <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                 <img src={project.image} alt={project.title} className='w-full h-auto motion-safe:mb-14'/>

                 <div className='absolute left-0 right-0  bottom-5 flex justify-center'>

                 <div className='inline-block bg-white w-3/4 px-4 py-4 shadow-md'>

                      <h2 className='text-xl font-semibold text-gray-800'>
                        {project.title} 
                        </h2>
                         
                        <p className='text-gray-500 text-sm'>
                          {project.price} <span className='px-1'>
                          
                          </span> {project.location}
                        </p>
                 </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
}

export default Projects
