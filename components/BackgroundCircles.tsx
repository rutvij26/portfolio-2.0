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
        h-[100px] w-[100px] md:h-[200px] md:w-[200px]  mt-52 md:mt-64 animate-ping"></div>
        <div className="absolute border border-primary rounded-full 
        h-[200px] w-[200px] md:h-[300px] md:w-[300px] mt-52 md:mt-64 animate-ping"></div>
        <div className="absolute border border-secondary rounded-full 
        h-[325px] w-[325px] md:h-[500px] md:w-[500px] mt-52 md:mt-64 animate-ping"></div>
        <div className="absolute border border-secondary rounded-full
        h-[300px] w-[300px] md:h-[650px] md:w-[650px] mt-52 md:mt-64 animate-pulse"></div>
        <div className="absolute border border-primary rounded-full 
        h-[400px] w-[400px] md:h-[800px] md:w-[800px] mt-52 md:mt-64"></div>
    </motion.div>
  )
}

export default BackgroundCircles