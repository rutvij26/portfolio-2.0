import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '../sanity';
import tailwindConfig from '@/tailwind.config';

type Props = {
    pageInfo: PageInfo
}

const cursorColor = tailwindConfig.daisyui.themes[0]['mytheme'].secondary;

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hey! The Name's ${pageInfo?.name}`,
            "With a hint of coffee, A touch of code,",
            " I craft API's, using node."
        ],
        loop: true,
        delaySpeed: 2000,
        deleteSpeed: 20
    })
    return (
        <motion.div className='h-screen flex flex-col space-y-12 items-center justify-center 
        text-center overflow-hidden'>
            <BackgroundCircles />
            {/* <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://i.imgur.com/44hhaBT.jpeg" alt="" /> */}

            <img
                className='relative rounded-full h-28 w-28 md:h-40 md:w-40 xl:h-48 xl:w-48 mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()} alt="" />
            <div className="z-20">
                <h2 className='text-sm uppercase text-accent pt-2 md:pt-0 pb-4 md:tracking-[5px] xl:md:tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className=" text-xl text-accent md:text-4xl lg:text-4xl xl:text-6xl font-semibold px-10">
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor={cursorColor} />
                </h1>
                <div className="pt-16 lg:pt-5">
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