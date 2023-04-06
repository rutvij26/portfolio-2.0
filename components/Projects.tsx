import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className="relative w-full flex 
        overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]">
            {projects?.map((project, i) => (
                <div key={i+1} className="w-screen flex-shrink-0 snap-center flex flex-col
                space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className='w-64 h-64 xl:w-[500px] xl:h-[500px] object-cover object-center'
                        src={urlFor(project?.image).url()} alt="" 
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className='underline decoration-[#F7AB0A]/50'>
                                <a href={project?.linkToBuild}>
                                {project?.title}
                                </a>
                            </span>
                        </h4>

                        <div className=" flex items-center space-x-2 justify-center">

                        { project?.technologies.map(tech => (
                            <img 
                            className="h-7 w-7 "
                            key={tech._id} 
                            src={urlFor(tech.image).url()} 
                            alt=""></img>
                            ))}
                        </div>
                        
                        <p className='text-lg md:text-justify text-left xl:text-justify' >
                        {project?.summary}
                        </p>

                    </div>  
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
        -skew-y-12" />
    </motion.div>
  )
}

export default Projects