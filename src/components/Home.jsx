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
          <p className='dark:text-subtext pt-10 flex items-start text-left justify-start text-subtext text-[17px]'>

            As a software developer, I'm dedicated to continuous self-improvement, refining my skills through daily study and hands-on work. Passionate about creating efficient solutions and enhancing user experiences, I embrace challenges to evolve and innovate in the dynamic landscape of software development.

            You can follow me @
          </p>
        </div>
        {/* <Socialbar /> */}
        <div className='md:grid grid-cols-2 gap-4'>
          <Card />
          <Card />
        </div>
        <hr class="h-px mt-10 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="w-full mt-5 justify-center flex flex-col items-center">
          <div className=" w-full" >
            <p className="text-2xl  text-left dark:text-white "> my projects 🏆</p>
          </div>
        </div>



        <div className="project-info">
      <p className='pt-10 items-start text-left text-subtext text-[17px]'>
        You can review some of my projects to gain insights into my expertise and experience in the field. I have created numerous projects, including this portfolio website, with inspiration drawn from leebroo for this particular development. Checkout my 
        <a href="https://github/b-bek6" target="_blank" className="github-link">
          <div className='w-fit  gap-2 border align-middle px-2 py-[2px] mx-2  border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline'>
            
          <span className='github-logo inline-block'>
            <svg className='' width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.81 0C4.393 0 0 4.393 0 9.81c0 4.343 2.801 8.032 6.671 9.35.487.09.665-.211.665-.469 0-.231-.008-.847-.012-1.66-2.711.59-3.276-1.303-3.276-1.303-.443-1.129-1.083-1.428-1.083-1.428-1.013-.69.076-.676.076-.676 1.117.078 1.703 1.145 1.703 1.145.992 1.7 2.603 1.209 3.24.92.1-.717.387-1.207.703-1.487-2.46-.277-5.047-1.231-5.047-5.48 0-1.21.432-2.2 1.145-2.976-.115-.278-.496-1.405.107-2.927 0 0 .928-.296 3.048 1.13.883-.245 1.827-.368 2.769-.372.943.004 1.886.127 2.769.372 2.12-1.426 3.048-1.13 3.048-1.13.603 1.522.223 2.649.108 2.927.715.776 1.144 1.766 1.144 2.976 0 4.26-2.593 5.202-5.058 5.477.398.344.754 1.022.754 2.064 0 1.491-.013 2.692-.013 3.051 0 .262.18.565.674.467C17.199 17.842 20 14.153 20 9.81 20 4.393 15.607 0 9.81 0z" fill="#24292f"/>
            </svg>
          </span>
           GitHub 
          </div>
          account to know more
        </a>
      </p>
    </div>
        <div className='grid  pt-10 grid-cols-1 gap-4'>
          <ProjectCard />
          <ProjectCard />
          {/* <ProjectCard/>
            <ProjectCard/> */}
        </div>

        <div>
          <div className='dark:text-white pt-10 flex items-start text-left justify-start text-subtext text-[17px]'>
            here's my timeline from the day that i was born to the date i am building this website
          </div>
          <div className='grid animate-fade-up animate-once  pt-10 grid-cols-1 gap-4'>
            <Timeline />
          </div>

        </div>

        <div className='dark:text-white pt-10 flex items-start text-left justify-start text-subtext text-[17px]'>
          These are the services I can provide if you hire me.
        </div>
        <div className='md:grid grid-cols-4 md:grid-cols-4  pt-10  gap-4'>
          <div className="md:col-span-2">
            <ServiceCard title={"Web Application Development"} fontFamily="RubikScribble" color="white" />
          </div>
          <div className="md:col-span-2">
            <ServiceCard title={"Server-Side Development"} fontFamily="RubikScribble" color="gray" />
          </div>
          <div className="col-span-1">
            <ServiceCard title="Database Management" fontFamily="RubikScribble" color="white" />
          </div>
          <div className="md:col-span-2">
            <ServiceCard title="RESTful API Development" fontFamily="" color="gray" />
          </div>
          <div className="md:col-span-1">
            <ServiceCard title="Testing and Debugging" fontFamily="" color="darkPrimary" />
          </div>
          <div className="md:col-span-4">
            <ServiceCard title="Version Control" fontFamily="" color="primary" />
          </div>
        </div>




      </div>

    </>
  )
}
