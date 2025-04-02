import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message,
        }
        try{
           await axios.post("https://getform.io/f/ajjegnla",userInfo);
           toast.success("Your message has been sent");
        }
        catch(error){
            console.log(error);
        }

    }

  return (
    <>
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 md:pt-20 pb-10'>
            
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span className='flex justify-center'>Please check out my socials</span>
            <div className="flex flex-col text-white justify-center mx-auto w-full pb-14">
                    <h1 className="font-bold text-2xl text-center p-2">TEAM</h1>
                    <div className="flex flex-wrap justify-center mt-6 gap-6">
                        <a href="https://in.linkedin.com/in/anil-gummula" target="_blank" className="w-full sm:w-auto">
                            <div className="flex items-center border-2 rounded-lg p-6 sm:p-10">
                                <img src="/linkedin.png" alt="" className="border-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                                <p className="ml-6 text-lg sm:text-xl font-semibold text-blue-400 underline">anil-gummula</p>
                            </div>
                        </a>

                        <a href="https://github.com/anilgummula" target="_blank" className="w-full sm:w-auto">
                            <div className="flex items-center border-2 rounded-lg p-6 sm:p-10">
                                <img src="/github.png" alt="" className="border-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                                <p className="ml-6 text-lg sm:text-xl font-semibold text-gray-400 underline">anilgummula</p>
                            </div>
                        </a>
                        <a href="mailto:anilgummula2060@gmail.com" target="_blank" className="w-full sm:w-auto">
                            <div className="flex items-center border-2 rounded-lg p-6 sm:p-10">
                                <img src="/mail.png" alt="" className="border-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                                <p className="ml-6 text-lg sm:text-xl font-semibold text-yellow-300 underline">anilgummula2060@gmail.com</p>
                            </div>
                        </a>
                        
                    </div>
                </div>
            <span className='flex justify-center'>Please fill out the form below to contact me</span>
            <div className='flex flex-col justify-center items-center mt-5'>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                // action="https://getform.io/f/ajjegnla" 
                // method='POST'
                className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
                >
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Full Name</label>
                        <input type="text" 
                        {...register("name", { required: true })} 
                        className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                        id='name'
                        name='name'
                        placeholder='Enter your fullname'
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input type="text" 
                        {...register("email", { required: true })} 
                        className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                        id='email'
                        name='email'
                        placeholder='Enter your email address'
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message</label>
                        <textarea type="text"
                        {...register("message", { required: true })} 
                        className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                        id='message'
                        name='message'
                        placeholder='Enter your Query'
                        />
                        {errors.message && <span>This field is required</span>}
                    </div>

                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact