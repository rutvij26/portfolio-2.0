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
    className='h-screen relative flex overflow-hidden flex-col text-center
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-accent text-2xl'>
            Projects
        </h3>

        <div className="relative w-full flex 
        overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-primary/20 scrollbar-thumb-secondary">
            {projects?.map((project, i) => (
                <div key={i+1} className="w-screen flex-shrink-0 snap-center flex flex-col
                space-y-5 items-center justify-center p-20 md:p-44 h-screen mx-auto">
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className='w-52 h-52 sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-60 lg:h-60 xl:w-[400px] xl:h-[400px] object-cover object-center'
                        src={urlFor(project?.image).url()} alt="" 
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-accent font-semibold text-center">
                            <span className='underline decoration-secondary/50 text-accent'>
                                <a href={project?.linkToBuild}>
                                {project?.title}
                                </a>
                            </span>
                        </h4>

                        <div className=" flex items-center space-x-2 justify-center">

                        { project?.technologies.map(tech => (
                            <img 
                            className="h-7 w-7 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                            key={tech._id} 
                            src={urlFor(tech.image).url()} 
                            alt=""></img>
                            ))}
                        </div>
                        
                        <p className='text-sm text-justify md:text-md lg:text-lg xl:text-xl text-accent' >
                        {project?.summary}
                        </p>

                    </div>  
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-primary/10 left-0 h-[400px] md:h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects