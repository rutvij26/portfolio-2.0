import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: 100,
            opacity:0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://us-cdn.nanoleaf.me/assets/img/favicons/nanoleaf-small-icon.png" 
        alt="" />

        <div className="px-0 md:px-10">
            <h4 className='text-4xl font-light'>Full stack developer Intern</h4>
            <p className="font-bold text-2xl mt-1">Nanoleaf</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" 
                src="https://www.svgrepo.com/show/374144/typescript.svg" 
                alt="" />
                <img className="h-10 w-10 rounded-full" 
                src="https://www.svgrepo.com/show/452075/node-js.svg" 
                alt="" />
                <img className="h-10 w-10 rounded-full" 
                src="https://www.svgrepo.com/show/331488/mongodb.svg" 
                alt="" />
                {/* Tech Used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Started work... - Ended...
            </p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>  Summary points </li>
                <li>  Summary points </li>
                <li>  Summary points </li>
                <li>  Summary points </li>
                <li>  Summary points </li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard