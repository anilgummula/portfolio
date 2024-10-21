import React, { useState } from 'react';
// import pic from '../../public/photo.avif';
import pic from '../../public/mydp.jpg';

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from 'react-scroll';

function Navbar() {

    const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        },
    ]
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed left-0 top-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='w-12 h-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                ANI<span className='text-green-500 text-2xl'>L</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            {/* desktop nav bar */}
            <div>
                <ul className='hidden md:flex space-x-10'>
                    {navItems.map(({id,text})=>(
                        <li className='hover:scale-105 hover:font-semibold hover:underline duration-150 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >
                            {text}</Link> 
                        </li>
                    ))}
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                {menu? <IoCloseSharp size={24} /> :<AiOutlineMenu size={24}/>  }
                </div>
            </div>

        </div>

        {/* mobile nav bar */}
        {
            menu && (

            <div className='bg-white'>
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                    {navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                            <Link
                            onClick={()=>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >
                            {text}</Link> 
                        </li>
                    ))}
                </ul>

            </div>
            )
        }


    </div>
    </>
    
  )
}

export default Navbar
