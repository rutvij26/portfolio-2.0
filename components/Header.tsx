import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';
import tailwindConfig from '../tailwind.config';

interface HeaderProps {
    socials: Social[]
}


const fgColor = tailwindConfig.daisyui?.themes[0]['mytheme'].accent;

/**
 * Header of the portfolio
 */
const Header = ({ socials }: HeaderProps): JSX.Element => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center" >

                {
                    socials.map((social) => (
                        <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor={fgColor}
                        bgColor='transparent'
                    /> 
                    ))
                }
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer">

                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor={fgColor}
                    bgColor='transparent'
                />
                <Link href="#contact">

                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
                </Link>

            </motion.div>
        </header>
    );
}
// #endregion

export default Header;