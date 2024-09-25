import React from 'react';
import java from '../../public/java.png';
import python from '../../public/python.webp';
import mongoDB from '../../public/mongodb.jpg';
import express from '../../public/express.png';
import reactjs from '../../public/reactjs.png';
import nodejs from '../../public/node.png';

// import spring from '../../public/spring.png';
// import springBoot from '../../public/springBoot.jpg';

function Portfolio() {
    const cardItems =[
        {
            id:1,
            logo:mongoDB,
            name:"MongoDB"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:reactjs,
            name:"ReactJs"
        },
        {
            id:4,
            logo:nodejs,
            name:"NodeJS"
        },
        {
            id:5,
            logo:java,
            name:"Java"
        },
        {
            id:6,
            logo:python,
            name:"Python"
        },
    ]
  return (

    <>
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-10 md:space-x-2 space-y-2  '>
            {
                cardItems.map(({id,logo,name})=>(
                    <div key={id} className='md:w-[300px] h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-white'>
                        <img src={logo} alt="" className='w-[120px] h-[120px] p-1 rounded-full border-[2px] ' />
                        <div>
                            <div className='px-2 text-xl font-bold mb-2'>{name}</div>
                            <p className='px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className=' px-6 py-4 space-x-4'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded '>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded '>Source code</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Portfolio
