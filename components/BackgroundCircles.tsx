import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
        <div className="absolute border border-secondary rounded-full 
        h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[150px] lg:w-[150px] xl:h-[300px] xl:w-[300px]  mt-52 md:mt-60 xl:mt-64 animate-ping"></div>
        <div className="absolute border border-primary rounded-full 
        h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[250px] lg:w-[250px] xl:h-[450px] xl:w-[450px] mt-52 md:mt-60 xl:mt-64 animate-ping"></div>
        <div className="absolute border border-secondary rounded-full 
        h-[325px] w-[325px] md:h-[400px] md:w-[400px] lg:h-[425px] lg:w-[425px] xl:h-[600px] xl:w-[600px] mt-52 md:mt-60 xl:mt-64 animate-ping"></div>
        <div className="absolute border border-secondary rounded-full
        h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[750px] xl:w-[750px] mt-52 md:mt-60 xl:mt-64 animate-pulse"></div>
        <div className="absolute border border-primary rounded-full 
        h-[400px] w-[400px] md:h-[550px] md:w-[550px] lg:h-[650px] lg:w-[650px] xl:h-[1000px] xl:w-[1000px] mt-52 md:mt-60 xl:mt-64"></div>
    </motion.div>
  )
}

export default BackgroundCircles