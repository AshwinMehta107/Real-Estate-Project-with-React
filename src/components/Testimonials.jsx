import React from 'react'
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div
      className='bg-[#f0eee8] px-6 py-24 md:px-12 lg:px-20 w-full overflow-hidden'
      id='Testimonials'>
      <div className='container mx-auto'>
      <p className='section-kicker mb-4 text-center'>Client stories</p>
      <h2 className='font-display text-4xl sm:text-5xl text-center'>The feeling of finding home.</h2>
      <p className='text-center text-slate-500 mt-4 mb-12 max-w-md mx-auto leading-7'>Real stories from people who found a space that made sense for their next chapter.</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='max-w-[350px] bg-white px-8 py-10 text-center shadow-sm'
          >
            <img
              className='w-20 h-20 rounded-full mx-auto mb-4'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className='text-xl text-gray-700 font-medium'>
              {testimonial.name}
            </h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                <img key={starIndex} src={assets.star_icon} alt='' />
              ))}
            </div>
            <p className='text-slate-600 leading-7'>“{testimonial.text}”</p>
          </div>
        ))}
      </div></div>
    </div>
  );
}

export default Testimonials
