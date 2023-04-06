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
    <div className="h-screen flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-7xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className='text-4xl font-semibold text-center'> {text}
		<Cursor cursorColor='#F7AB0A' />
        </h4>
        <div className='space-y-10'>
			<div className="flex items-center space-x-5 justify-center">
				<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
				<p className='text-xl'>+1 (905) 782-5025</p>
			</div>

			<div className="flex items-center space-x-5 justify-center">
				<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
				<p className='text-xl'>rut26sathe@gmail.com</p>
			</div>

			<div className="flex items-center space-x-5 justify-center">
				<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
				<p className='text-xl'>Toronto</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
				<div className="flex space-x-2">
					<input {...register('name')} placeholder='Name' className="contactInput" type="text" />
					<input {...register('email')} placeholder='Email' className="contactInput" type="email" />
				</div>
				<input {...register('subject')} placeholder='Subject' className="contactInput" type="text" />
				<textarea {...register('message')} placeholder='Message' className="contactInput" ></textarea>
				<button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
					Submit</button>
			</form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe