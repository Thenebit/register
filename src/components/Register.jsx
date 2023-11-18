import React, { useRef } from 'react'
import SideImg from '../assets/sd1.jpg'
import emailjs from '@emailjs/browser'

const Register = () => {
    const form = useRef();

    const publicKey = 'VSB1UnQKJNP86AcBI';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, publicKey)
        .then((result) => {
            // console.log(result.text);
            alert("Submitted successfully!");
        }, (error) => {
            // console.log(error.text);
            alert("Failed to send. Check your connection");
        });
    };

    return (
       <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={SideImg} alt='/' />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form ref={form} onSubmit={sendEmail} className='max-w-[400px] w-full mx-auto bg-gray-900 px-8 p-8 rounded-lg'>
                    <h2 className='uppercase text-4xl dark:text-white font-bold text-center'>Sign up</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name</label>
                        <input type='text' name='user_name' required className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                    </div>

                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Email</label>
                        <input type='text' name='user_email' required className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                    </div>

                    <div className='flex flex-col text-gray-800 py-2'>
                        <label className=' text-gray-400'>Requirement</label>
                        <select name="user_tool" placeholder="Choose....." required className='rounded-lg mt-2 p-2 focus:border-blue-500 focus:outline-none'>
                            <option disabled>Choose.....</option>
                            <option>I have a laptop or pc</option>
                            <option>Don't have any</option>
                        </select>
                    </div>

                    <div className='flex flex-col text-gray-800 py-2'>
                        <label className=' text-gray-400'>Message</label>
                        <textarea name='message' required
                            className='rounded-lg mt-2 p-2 focus:border-blue-500 focus:outline-none'
                            placeholder="Reason to partake in this class"
                        />
                    </div>

                    <input className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 x-white font-semibold rounded-lg' type='submit' value='Send' />
                </form>
            </div>
       </div>
    );

}
export default Register;