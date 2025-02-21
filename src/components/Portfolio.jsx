import React from 'react';

import FarmerMarket from '/projects/farmer.png';
import MusicMania from '/projects/music.png';
import ChatBot from '/projects/bot.png';
import JobSearch from '/projects/worker.png';

// import spring from '../../public/spring.png';
// import springBoot from '../../public/springBoot.jpg';

function Portfolio() {
    const cardItems =[
        {
            id:1,
            logo:FarmerMarket,
            name:"Farmer Market",
            description:"This is a website where general people can buy health foods from farmers directly",
            url:"https://farmarket.netlify.app/",
            repo:"https://github.com/anilgummula/farmert-market-full"
        },
        {
            id:2,
            logo:MusicMania,
            name:"Music Mania",
            description:"This is a webpage where you can upload download and listen to the music ",
            url:"https://musicmania2050.netlify.app/",
            repo:"https://github.com/anilgummula/musicmania"
        },
        {
            id:3,
            logo:ChatBot,
            name:"Chatbot BotGPT",
            description:"A chatbot app in which you can ask what ever queries want to ask to our chatbot",
            url:"https://botgpt2050.netlify.app/",
            repo:"https://github.com/anilgummula/botgpt"
        },
        {
            id:4,
            logo:JobSearch,
            name:"Job Search",
            description:"A JobSearch Platform, Where you can apply for a particular job post and get hired! based on skillset ",
            url:"",
            repo:""
        },
        // {
        //     id:5,
        //     logo:java,
        //     name:"Java"
        // },
        // {
        //     id:6,
        //     logo:python,
        //     name:"Python"
        // },
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
                cardItems.map(({id,logo,name,description,url,repo})=>(
                    <div key={id} className='md:max-w-[400px] md:max-h-[340px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 bg-white mx-4'>
                        <img src={logo} alt="" className='w-[120px] h-[120px] p-1 rounded-full border-[2px] flex justify-center mx-auto ' />
                        <div className='py-2'>
                            <div className='px-2 text-xl font-bold mb-2 flex justify-center mx-auto'>{name}</div>
                            <p className='px-2 text-gray-700 flex text-center'>{description}</p>
                        </div>
                        <div className=' px-6 py-4 space-x-4 flex justify-center'>
                            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ' href={url} target='_blank' >SITE LINK</a>
                            <a className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded ' href={repo} target='_blank'>Source code</a>
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
