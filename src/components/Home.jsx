import React from 'react'
import Card from './Card'
import ProjectCard from './ProjectCard'
import ServiceCard from './ServiceCard'
import Timeline from './Timeline'
export default function home() {
  return (
    <>
      <div className='container'>
        <div className='grid justify-start'>
         
          <div className="w-full pt-16 justify-center flex flex-col items-center">
            <div className=" w-full" >
              <p className="text-2xl  text-left dark:text-white "> hey, I'm bibek 👋🏻</p>
            </div>
          </div>
          <p className='dark:text-white pt-10 flex items-start text-left justify-start opacity-50 text-[17px]'>
            
As a software developer, I'm dedicated to continuous self-improvement, refining my skills through daily study and hands-on work. Passionate about creating efficient solutions and enhancing user experiences, I embrace challenges to evolve and innovate in the dynamic landscape of software development.

You can follow me @
          </p>
        </div>
        {/* <Socialbar /> */}
        <div className='md:grid grid-cols-2 gap-4'>
          <Card />
          <Card />
        </div>
        {/* <div className="w-full pt-10 justify-center flex flex-col items-center">
            <div className=" w-full" >
              <p className="text-2xl  text-left dark:text-white "> my projects 🏆</p>
            </div>
          </div> */}

{/* <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}


          <p className='dark:text-white pt-10 flex items-start text-left justify-start opacity-50 text-[17px]'>
           
You can review some of my projects to gain insights into my expertise and experience in the field. I have created numerous projects, including this portfolio website, with inspiration drawn from leebroo for this particular development.
          </p>
          <div className='grid  pt-10 grid-cols-1 gap-4'>
            <ProjectCard/>
            <ProjectCard/>
            {/* <ProjectCard/>
            <ProjectCard/> */}
          </div>

          <div>
          <div className='dark:text-white pt-10 flex items-start text-left justify-start opacity-50 text-[17px]'>
          here's my timeline from the day that i was born to the date i am building this website 
          </div>
          <div className='grid animate-fade-up animate-once  pt-10 grid-cols-1 gap-4'>
            <Timeline/>
          </div>
          
          </div>

          <div className='dark:text-white pt-10 flex items-start text-left justify-start opacity-50 text-[17px]'>
          These are the services I can provide if you hire me.
          </div>
          <div className='md:grid grid-cols-4 md:grid-cols-4  pt-10  gap-4'>
            <div className="md:col-span-2">
            <ServiceCard title={"Web Application Development"} fontFamily="RubikScribble" color="white"/>
            </div>
            <div className="md:col-span-2">
          <ServiceCard title={"Server-Side Development"} fontFamily="RubikScribble" color="gray"/>
            </div>
            <div className="col-span-1">
          <ServiceCard title="Database Management" fontFamily="RubikScribble" color="white"/>
            </div>
            <div className="md:col-span-2">
          <ServiceCard title="RESTful API Development" fontFamily="" color="gray"/>
            </div>
            <div className="md:col-span-1">
          <ServiceCard title="Testing and Debugging" fontFamily="" color="darkPrimary"/>
            </div>
            <div className="md:col-span-4">
          <ServiceCard title="Version Control" fontFamily="" color="primary"/>
            </div>
          </div>


         

      </div>
      
    </>
  )
}
