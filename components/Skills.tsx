import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { Skill as SkillType}  from '@/typings';

type Props = {
    skills: SkillType[]
}

function Skills({ skills }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen  w-screen max-w-fill flex relative flex-col text-center
    xl:flex-row xl:max-w-[2000px] xl:px-10 min-h-around justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-accent text-2xl'>
                Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-accent text-xs">
                Hover over a skill for current proficiency</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-1 md:gap-4 lg:gap-4 xl:gap-4 z-20">
                {
                    skills?.slice(0, skills.length / 2).map((skill) => (
                        <Skill 
                        key={skill._id}
                        skill={skill}
                        directionLeft
                        />
                    ))
                }
                {
                    skills?.slice(skills.length/2, skills.length).map((skill) => (
                        <Skill 
                        key={skill._id}
                        skill={skill}
                        
                        />
                    ))
                }
            </div>
            <div className="w-full absolute top-[30%] bg-secondary/10 left-0 h-[400px] md:h-[500px] xl:h-[600px] skew-y-12 z-0" />
        </motion.div>

    )
}


export default Skills