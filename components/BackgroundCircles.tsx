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
        <div className="absolute border border-[#333333] rounded-full 
        h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[200px] xl:w-[200px] mt-52 animate-ping"></div>
        <div className="absolute border border-[#333333] rounded-full 
        h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] mt-52 animate-ping"></div>
        <div className="absolute border border-[#333333] rounded-full 
        h-[325px] w-[325px] md:h-[500px] md:w-[500px] lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[500px] mt-52 animate-ping"></div>
        <div className="absolute border border-[#F7AB0A] rounded-full
        h-[360px] w-[360px] md:h-[650px] md:w-[650px] lg:h-[650px] lg:w-[650px] xl:h-[650px] xl:w-[650px] mt-52 animate-pulse"></div>
        <div className="absolute border border-[#333333] rounded-full 
        h-[430px] w-[430px] md:h-[800px] md:w-[800px] lg:h-[800px] lg:w-[800px] xl:h-[800px] xl:w-[800px] mt-52"></div>
    </motion.div>
  )
}

export default BackgroundCircles