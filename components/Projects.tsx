import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4]
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
            {projects.map((project, i) => (
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
                        src="https://www.svgrepo.com/show/374144/typescript.svg" alt="" 
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Project Title:
                            </span>
                            {" "}{i+1}
                        </h4>

                        <p className='text-lg md:text-justify text-left xl:text-justify' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                    </div>  
                </div>
            ))}/show/374144/typescript.svg
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
        -skew-y-12" />
    </motion.div>
  )
}

export default Projects