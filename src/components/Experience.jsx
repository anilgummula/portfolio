import React from 'react';
import html from '/html.png';
import css from '/css.jpg';
import javascript from '/javascript.png';
import java from '/java.png';
import php from '/php.png';
import mysql from '/mysql.png';
import c from '/c.png';
import cpp from '/cpp.png';
import reactjs from '/reactjs.png'
import express from '/express.png'
import tailwind from '/tailwind.png'
import node from '/node.png'
import mongo from '/mongo.jpg'


// import spring from '../../public/spring.png';
// import springBoot from '../../public/springBoot.jpg';

function Experience() {
    const cardItems =[
        // {
        //     id:1,
        //     logo:html,
        //     name:"Html"
        // },
        // {
        //     id:2,
        //     logo:css,
        //     name:"CSS"
        // },
        
        // {
        //     id:7,
        //     logo:c,
        //     name:"C"
        
        {
            id:13,
            logo:mongo,
            name:"MongoDB"
        },
        {
            id:12,
            logo:express,
            name:"ExpressJs"
        },
        {
            id:9,
            logo:reactjs,
            name:"ReactJs"
        },
        {
            id:11,
            logo:node,
            name:"NodeJs"
        },
        {
            id:10,
            logo:tailwind,
            name:"Tailwind css"
        },
        // },
        {
            id:3,
            logo:cpp,
            name:"c++"
        },
        
        {
            id:4,
            logo:java,
            name:"Java"
        },
        {
            id:5,
            logo:php,
            name:"PHP"
        },
        {
            id:6,
            logo:mysql,
            name:"MySQL"
        },
        {
            id:7,
            logo:javascript,
            name:"Javascript"
        },
    ]
  return (
    <>
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className=''>
                I've more than 2 years of experiance in below technologies.
            </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 '>
            {
                cardItems.map(({id,logo,name})=>(
                    <div key={id} className='flex flex-col justify-center items-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 bg-white'>
                        <img src={logo} alt="" className='w-[150px] rounded-full  ' />
                        <div>
                            <div className='px-2'>{name}</div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Experience
