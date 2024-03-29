import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfos } from '../utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { Analytics } from '@vercel/analytics/react';
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({ pageInfo,
  experiences,
  skills,
  projects,
  socials }: Props) {
  return (
    <>
    <NextSeo 
      title="Rutvij's Portfolio"
      description="Single page Portfolio of 'Rutvij Sathe (Full Stack Developer)' developed using NextJS, Sanity.io and Deployed on Vercel!"
      canonical='https://rutvijsathe.dev'
    />
    <div className='bg-base-100 text-accent 
    h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-primary scrollbar-thumb-secondary'>
      <Head>
        <title>Rutvij&apos;s Portfolio</title>
      </Head>
      <Header socials={socials}/>
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex justify-center items-center text-gray-400 text-xs">
            <p>Designed & Developed by {""}
              <span className='font-semibold underline'>Rutvij Sathe</span>{"."}</p>
          </div>
        </footer>
      </Link>
    </div>
    <Analytics />
    </>

  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfos();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }

} 