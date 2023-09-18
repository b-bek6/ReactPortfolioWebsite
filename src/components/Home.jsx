import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Socialbar from './Socialbar'
export default function home() {
  return (
    <>
    <div className='grid justify-start'>
        <Navbar/>


    <div className="w-full pt-16 justify-center flex flex-col items-center">

    <div className=" w-full" >
        <p className="text-2xl flex text-left dark:text-white "> hey, I'm bibek 👋🏻</p>
    </div>
    </div>
    <p className='dark:text-white pt-10 flex items-start text-left justify-start opacity-50 text-[17px]'>
    I'm a frontend developer, optimist, and community builder. I currently work as the VP of Developer Experience at Vercel, where I lead the community for Next.js, an open-source web framework built with React.
    </p>
    </div>

<Socialbar/>

    <div className='grid grid-cols-2 gap-4'>

  <Card/>
  <Card/>

    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  )
}
