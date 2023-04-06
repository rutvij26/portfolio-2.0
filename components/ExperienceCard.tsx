import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
    console.log(experience)
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[500px] xl:[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: 100,
            opacity:0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[125px] xl:h-[125px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()} 
        alt="" />

        <div className="px-0 md:px-10">
            <h4 className='text-3xl font-light'>{experience?.jobTitle}</h4>
            <p className="font-bold text-xl mt-1">{experience?.company}</p>
            <div className="flex space-x-2 my-2">
                {
                    experience?.technologies?.map((tech) => (
                        <img className="h-10 w-10 rounded-full" 
                        key={tech._id}
                        src={urlFor(tech.image).url()} 
                        alt="" />
                    ))
                }
                
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience?.dateStarted).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                - 
                {experience?.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
            <ul className='list-disc space-y-2 ml-5 pr-2 text-left text-sm h-60 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]'>
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