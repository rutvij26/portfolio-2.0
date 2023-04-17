import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
    <motion.img 
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        className=' object-cover h-14 w-14 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24  filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-14 w-14 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-full">
            <div className="flex items-center justify-center h-full z-0">
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill?.progress}
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill