import React from 'react';

import FarmerMarket from '/projects/farmer.png';
import MusicMania from '/projects/music.png';
import ChatBot from '/projects/bot.png';
import JobSearch from '/projects/worker.png';
import chitchat from '/projects/netvork.png';
import Game from '/projects/game.jpeg';
import Game1 from '/projects/game1.png';
import npm from '/projects/npm.png';
// import imageGen from '/projects/valo2.webp';
import imageGen from '/projects/logo2.jpg';

// import spring from '../../public/spring.png';
// import springBoot from '../../public/springBoot.jpg';

function Portfolio() {
    const cardItems =[
        {
            id:0,
            logo:npm,
            name:"NPM package",
            description:"A express package for a quick express server setup for beginner's",
            url:"https://www.npmjs.com/package/first-server-setup",
            repo:"https://github.com/anilgummula/my_npm",
            complete:true
        },
        {
            id:1,
            logo:FarmerMarket,
            name:"Farmer Market",
            description:"This is a website where general people can buy health foods from farmers directly",
            url:"https://farmarket.netlify.app/",
            repo:"https://github.com/anilgummula/farmert-market-full",
            complete:true
        },
        {
            id:5,
            logo:chitchat,
            name:"NetVork",
            description:"A simple Chat app which was implemented in MERN using Socket.IO",
            url:"https://netvork.netlify.app/",
            repo:"https://github.com/anilgummula/ChitChat",
            complete:true
        },
        {
            id:6,
            logo:imageGen,
            name:"ImageGen",
            description:"A image generation application with a prompt entered , implemented using an open source image generation api",
            url:"https://imagegen2050.netlify.app/",
            repo:"https://github.com/anilgummula/imageGen",
            complete:true
        },
        {
            id:3,
            logo:Game,
            name:"Rgukt-Game",
            description:"Virtual Rgukt University Game Using Unity, Where we can experience the virual world of Our University",
            url:"https://rgukt-game.netlify.app/",
            repo:"https://github.com/anilgummula/rgukt_game",
            complete:true
        },
        {
            id:8,
            logo:Game1,
            name:"Fun Game",
            description:"A fun game made using html, CSS & JS",
            url:"https://fungame001.netlify.app/",
            repo:"https://github.com/anilgummula/game1",
            complete:true
        },
        {
            id:2,
            logo:MusicMania,
            name:"Music Mania",
            description:"A simple music player app ; where you can upload download and listen to the music ",
            url:"https://musicmania2050.netlify.app/",
            repo:"https://github.com/anilgummula/musicmania",
            complete:true
        },
        {
            id:4,
            logo:ChatBot,
            name:"Chatbot BotGPT",
            description:"A chatbot app in which you can ask what ever queries want to ask to our chatbot",
            url:"https://botgpt2050.netlify.app/",
            repo:"https://github.com/anilgummula/botgpt",
            complete:true
        },
        {
            id:7,
            logo:JobSearch,
            name:"Job Search",
            description:"A JobSearch Platform, Where you can apply for a particular job post and get hired! based on skillset ",
            url:"https://processing-404.netlify.app/",
            repo:"https://processing-404.netlify.app/",
            complete:false
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
            <h1 className='text-3xl font-bold mb-5'>Projects</h1>
            <span className='underline font-semibold'>Featured Projects</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-10 md:space-x-2 space-y-2  '>
            {
                cardItems.map(({id,logo,name,description,url,repo,complete})=>(
                    <div key={id} className='md:max-w-[400px] md:max-h-[400px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 bg-white mx-4'>
                        <img src={logo} alt="" className='w-[120px] h-[120px]  p-1 rounded-full border-[2px] flex justify-center mx-auto ' />
                        <div className='py-2'>
                            <div className='px-2 text-xl font-bold mb-2 flex justify-center mx-auto'>{name}</div>
                            <p className='px-2 text-gray-700 flex text-center'>{description}</p>
                        </div>
                        {!complete? 
                        ( 
                            <div className='bg-yellow-300 flex justify-center rounded-md mx-6 my-4'>
                                Under processing...😊
                            </div>  
                        ): ("")}
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
