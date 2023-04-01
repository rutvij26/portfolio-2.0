import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey! The Name's Rutvij Sathe",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <motion.div className='h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden'>
            <BackgroundCircles />
            {/* <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://i.imgur.com/44hhaBT.jpeg" alt="" /> */}
            
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://i.imgur.com/akw0NDB.jpeg" alt="" />
            <div className="z-20">
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className='mr-3'>{text}</span>
                index.ts    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                    <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero