import React from 'react'
import {AiFillGithub , AiFillLinkedin} from 'react-icons/ai'
import {LiaDiscord} from 'react-icons/lia'
export default function NavBar() {
  return (
    <>
    <div>
        <ul className='bg-red-500 text-md h-[1px] flex gap-4 items-start justify-start  text-gray-800 dark:text-white'>
             <button><li className='flex items-center justify-center gap-1 hover:underline'>
              {/* <AiFillGithub/>  */}
              home </li></button>
             <button><li className='flex items-center justify-center gap-1'>
              {/* <LiaDiscord/>  */}
             blog 
             </li></button>
             <button><li className='flex items-center justify-center gap-1'>
              {/* <AiFillLinkedin/> */}
              projects
               </li></button>
        </ul>
    </div>
    
    </>
  )
}
