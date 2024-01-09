import React from 'react'
import image from '../assets/img/profile-img.jpg'
import { AiFillYoutube } from 'react-icons/ai'
import { GoArrowUpRight } from 'react-icons/go'
export default function Card() {
  return (
    <div className='text-[18px] text-black dark:text-white flex justify-around items-center gap-8 py-3 mt-5 min-w-[200px] dark:border-[#404040] border-[#b7b6b6] border rounded-sm  dark:bg-[#262626] bg-[#dfdfdf]'>
        <div className=' flex gap-2 '>
          <div className='relative'>

        <img className='rounded-full relative object-cover w-16 h-16' src={image} alt="image" />
        <div className=''>
          <AiFillYoutube className='absolute left-10 top-10 p-1 bg-white rounded-full object-cover w-7 h-7 text-red-500'/>
        </div>
          </div>
        <div className='grid text-left'>
        <p>@imbibek1</p>
        <p className='text-subtext'>258 subscirbers</p>
        </div>
        </div>
        <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
      />
    </svg>
    </div>
  )
}
