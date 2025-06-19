import React from 'react'

function About() {
  return (

    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
            Hello, I'm Anil, a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className='text-green-600 text-xl font-semibold'>
            B.Tech, Computer Science and Engineering
        </h1>
        <span>
            [B.Tech/CSE], [3yr] , [RGUKT-Basar], [2026 Graduation]
        </span>
        <br />
        <br />
        <h1 className='text-green-600 text-xl font-semibold'>
            Skills & Expertise
        </h1>
        <span>
        ↪ &nbsp; Proficient in <span className='text-blue-500 font-semibold'>MERN STACK</span> [ReactJS,NodeJS,Express,TailwindCSS]
        <br /> 
        ↪ &nbsp; Experienced with [<span className='text-blue-500 font-semibold'>GIT/GITHUB</span>] 
        <br />
        ↪ &nbsp; Strong grasp of [<span className='text-blue-500 font-semibold'>Designing with TailwindCSS</span>] 
        {/* <br />
        ↪ &nbsp; Excellent problem-solving skills Effective communicator and collaborator */}
        </span>
        <br />
        <br />
        <h1 className='text-green-600 text-xl font-semibold'>
        Professional Experience
        </h1>
        <span>
        ↪ &nbsp; Project farmer market picked from <span className='text-orange-600 font-bold'>SIH</span> and made using <span className="font-bold text-red-500">MERN</span> (<a className='text-blue-600 font-semibold' href="https://farmarket.netlify.app/" target='_blank'>Farmer market</a>  ) 
        <br />
        ↪ &nbsp; Me with my teammate made a 3D-Game named <span className='text-purple-700 font-semibold'>"RGUKT-Virtual Game"</span> using  <span className='font-bold text-red-500'>Unity & Blender</span> Game Site : (<a className='text-teal-600 font-semibold' href="https://rgukt-game.netlify.app/" target='_blank'>Rgukt-Game</a>  )
        <br />
        ↪ &nbsp; I made this entire webpage(portfolio site) using  <span className='font-bold text-red-500'>React Js and TailwindCSS</span> portfolio website : (<a className='text-cyan-600 font-semibold' href="https://glistening-smakager-37a1c1.netlify.app/" target='_blank'>My Portfolio</a>  )
        <br />
            {/* 3) I have made some static clone websites like myntra clone using html:  (<a className='text-blue-600' href="https://www.decodedevils.shop/" target='_blank'>Myntra Clone</a>  ) 
        <br /> */}
        </span>
        <br />
        <br />
        <h1 className='text-green-600 text-xl font-semibold'>
        Achievements & Awards
        </h1>
        <a href="https://rgukt-game.netlify.app/" target="_blank">
            <span>
            <p className=" text-gray-500 font-bold">Got the first prize for our project [RGUKT-Game] in TechFest-2k25 RGUKT Antahpragnya</p>
            </span>
        </a>
        <br />
        <br />
        <h1 className='text-green-600 text-xl font-semibold'>
        Mission Statement
        </h1>
        <p>
        My mission is to leverage my skills and creativity to deliver innovative ideas and solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.   </p>
        
    </div>
    </>
  )
}

export default About;
