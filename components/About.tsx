import React from 'react'
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '../sanity';
import { useTypewriter } from 'react-simple-typewriter';

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "From Front-end dazzle to Back-end brilliance,",
            "I bring a full spectrum of skills, to deliver top-notch Web solutions "
        ],
        loop: true,
        delaySpeed: 1000
    })
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='flex flex-col relative h-screen
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] font-sans text-acccent text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover 
    md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className='text-4xl font-semibold'>
                {text}
                </h4>
                <p className='text-accent'>
                {pageInfo?.backgroundInformation}
                </p>
            </div>
        <div className="w-full absolute top-[30%] bg-secondary/10 left-0 h-[400px] md:h-[500px] skew-y-12" />
        </motion.div>
    )
}

export default About