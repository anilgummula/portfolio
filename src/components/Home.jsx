import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped} from "react-typed";

import pic from '../../public/photo.avif';



function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            {/* left part */}
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello, I'm a</h1>
                    {/* <span className='text-red-600 font-bold'>Developer</span> */}
                    <ReactTyped
                    className='text-red-700 font-bold'
                    strings={["&nbsp;Developer!","&nbsp;Programmer","&nbsp;Coder!"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop={true}
                    />
                </div>
                <br />
                
                {/* <p className='text-sm md:text-md text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor autem molestiae consectetur perferendis quasi possimus minima, tenetur ut est sunt architecto sapiente reprehenderit a quisquam ex recusandae illum error vitae! Quasi ipsam, deserunt suscipit assumenda aliquid harum commodi dolore ad illo?
                </p> */}


                {/* temp */}
                <p className='text-sm md:text-md text-justify'>
                    <div className='border-2 border-blue-500'>
                        (1) code: Not understood properly
                        send again
                        <br />
                        {/* (1) code: int main() printf(helloworld)
                        <br />
                        (1) code: int main() printf(helloworld)
                        <br />
                        (1) code: int main() printf(helloworld)
                        <br />
                        (1) code: int main() printf(helloworld) */}
                    </div>
                </p>
                {/* temp end */}
                <br />
                {/* social media icons  */}
                <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-center'>Available on</h1>
                    <ul className='flex space-x-5'>
                        <li>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <FaFacebookSquare className='text-2xl cursor-pointer'  />
                            </a>
                        </li>
                        <li>
                            <a href="https://in.linkedin.com/" target='_blank'>
                                <FaLinkedin className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li>
                        <IoLogoYoutube className='text-2xl cursor-pointer'/>
                        </li>
                        <li>
                        <FaTelegram className='text-2xl cursor-pointer'/>
                        </li>
                    </ul>  
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold'>Currently working on</h1>
                    <div className='flex space-x-5'>
                        <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  bg-green-500'/>
                        <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] bg-blue-300'/>
                        <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                        <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                    </div>  
                </div>
                </div>
                
            </div>
            {/* right part */}
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                <img src={pic} className='rounded-full md:h-[450px] md:w-[450px] ' alt="" />
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
