import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

type Inputs = {
	name: string;
	email: string;
	message: string;
	subject: string;
};

function ContactMe({ }: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const [text, count] = useTypewriter({
        words: [
            "I have got just what you need.",
			"Lets Talk!"
        ],
        loop: true,
        delaySpeed: 1500
    })
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:rut26sathe@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
	};
  
  return (
    <div className="h-screen flex relative flex-col text-center
    xl:flex-row w-screen xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center pt-16">
      <h3 className="absolute sm:top-24 top-32  uppercase tracking-[20px] text-accent text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-7 md:space-y-10 lg:space-y-10 xl:space-y-10 z-20">
        <h4 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold pt-10 text-center'> {text}
		<Cursor cursorColor='#F7AB0A' />
        </h4>
        <div className='space-y-7 md:space-y-10 lg:space-y-10 xl:space-y-10'>
			<div className="flex items-center md:space-x-3 lg:space-x-5 xl:space-x-5 justify-center">
				<PhoneIcon className="text-secondary h-7 w-7 animate-pulse"/>
				<p className='text-3sm md:text-xl lg:text-xl xl:text-xl'>+1 (905) 782-5025</p>
			</div>

			<div className="flex items-center md:space-x-3 lg:space-x-5 xl:space-x-5 justify-center">
				<EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse"/>
				<p className='text-3sm md:text-xl lg:text-xl xl:text-xl'>rut26sathe@gmail.com</p>
			</div>

			<div className="flex items-center md:space-x-3 lg:space-x-5 xl:space-x-5 justify-center">
				<MapPinIcon className="text-secondary h-7 w-7 animate-pulse"/>
				<p className='text-3sm md:text-xl lg:text-xl xl:text-xl'>Toronto</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-screen sm:w-fit p-3 sm:p-0 mx-auto'>
				<div className="flex sm:space-x-2 sm:flex-row flex-col">
					<input {...register('name')} placeholder='Name' className="contactInput" type="text" />
					<input {...register('email')} placeholder='Email' className="contactInput" type="email" />
				</div>
				<input {...register('subject')} placeholder='Subject' className="contactInput" type="text" />
				<textarea {...register('message')} placeholder='Message' className="contactInput" ></textarea>
				<button type="submit" className="bg-secondary py-5 px-10 rounded-md text-black font-bold text-lg">
					Submit</button>
			</form>
        </div>
      </div>
	  <div className="w-full z-0 absolute top-[30%] bg-secondary/10 left-0 h-[400px] md:h-[500px] xl:h-[600px] skew-y-12" />
    </div>
  )
}

export default ContactMe