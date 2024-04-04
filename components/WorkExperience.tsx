import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  console.log(experiences);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-accent text-2xl'>
        Experience</h3>
      <div className="w-full flex space-x-5 z-20 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-primary scrollbar-thumb-secondary">
        {/* Experience Cards */}
        {
          experiences.map((experience) => (
            <ExperienceCard
              key={experience._id}
              experience={experience}
            />
          ))
        }
      </div>
      <div className="w-full z-0 absolute top-[30%] bg-primary/10 left-0 h-[400px] md:h-[500px] xl:h-[600px] -skew-y-12" />
    </motion.div>
  )
}

export default WorkExperience