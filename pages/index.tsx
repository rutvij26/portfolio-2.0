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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white 
    h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]'> 
      <Head>
        <title>Rutvij&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
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
  )
}