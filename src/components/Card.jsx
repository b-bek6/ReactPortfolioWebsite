import React from 'react'
import image from '../assets/img/profile-img.jpg'
import image2 from '../assets/img/favicon1.png'
import { AiFillYoutube } from 'react-icons/ai'
import { GoArrowUpRight } from 'react-icons/go'
export default function Card() {
  return (
    <div className='text-[18px] text-black dark:text-white flex justify-around items-center gap-8 py-3 mt-5  border-[#404040] border rounded-sm  bg-[#262626]'>
        {/* <FaReact className='text-[80px]' /> */}
        <div className=' flex gap-2 '>
          <div className='relative'>

        <img className='rounded-full relative object-cover w-16 h-16' src={image} alt="image" />
        {/* <img className='absolute left-10 top-10 rounded-full object-cover w-7 h-7' src={image2} alt="image" /> */}
        <div className=''>
          <AiFillYoutube className='absolute left-10 top-10 p-1 bg-white rounded-full object-cover w-7 h-7 text-red-500'/>
        </div>
          </div>
        <div className='grid text-left'>
        <p>@imbibek1</p>
        <p className='opacity-50'>258 subscirbers</p>
        </div>
        </div>
        <div className='text-2xl flex items-center'>
          <GoArrowUpRight/>
        </div>
    </div>
  )
}
