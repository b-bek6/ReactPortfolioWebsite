import React from 'react'
import image from '../assets/img/profile-img.jpg'
import { AiFillYoutube } from 'react-icons/ai'
import { GoArrowUpRight } from 'react-icons/go'
export default function ServiceCard(props) {
    console.log(props)
    const textStyle = {
        fontFamily: props?.fontFamily || 'RubikScribble, sans-serif',
        color: props?.color
      };
  return (
    <div className='text-[18px] cursor-pointer text-black dark:text-white flex justify-around items-center gap-8 py-3 mt-5 text-md h-16 dark:border-[#404040] border-[#b7b6b6]  rounded-sm  dark:bg-[#262626] bg-[#dfdfdf]'>
        <div className=' flex gap-2 px-4'>
          <div className='relative'>
          </div>
        <div className='grid  text-left'>
        {/* <p style={textStyle} className=''>{props?.title}</p> */}
        <p style={textStyle} className={`font-extrabold hidden  dark:flex`} >{props?.title}</p>
        <p style={textStyle} className={`font-extrabold !text-black dark:hidden`} >{props?.title}</p>
        </div>
        </div>



    </div>

    
  )
}
