import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    h-[550px] w-[400px] sm:h-[650px] sm:w-[400px] md:h-[650px] md:w-[500px] lg:h-[650px] lg:w-[500px] xl:h-[650px] xl:w-[500px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: 100,
            opacity:0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-20 h-20 rounded-full sm:w-[125px] sm:h-[125px] md:w-[125px] md:h-[125px] lg:w-[125px] lg:h-[125px] xl:w-[125px] xl:h-[125px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()} 
        alt="" />

        <div className="px-0 md:px-10">
            <h4 className='text-xl md:text-2xl lg:text-3xl xl:text-3xl font-light'>{experience?.jobTitle}</h4>
            <p className="font-bold text-sm md:text-lg lg:text-xl xl:text-xl mt-1">{experience?.company}</p>
            <div className="flex space-x-2 my-2">
                {
                    experience?.technologies?.map((tech) => (
                        <img className="h-7 w-7 
                        sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10  
                        rounded-full" 
                        key={tech._id}
                        src={urlFor(tech.image).url()} 
                        alt="" />
                    ))
                }
                
            </div>
            <p className='uppercase text-sm md:text-md lg:text-lg xl:text-lg py-5 text-gray-300'>
                {new Date(experience?.dateStarted).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                - 
                {experience?.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
            <ul className='list-disc space-y-2 ml-5 pr-2 text-left text-xs md:text-sm lg:text-sm xl:text-md h-60 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]'>
                {
                    experience?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))
                }
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard