import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Socialbar() {
  return (
    <div className='relative container'>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='flex gap-4 divide-x justify-evenly'>
<div className='flex gap-4'>
        <ImFacebook className='text-white text-2xl'/>
        <AiOutlineInstagram className='text-white text-2xl'/>
</div>
<div>
    <input className='border-none bg-[#111010] focus:outline-none text-white' onFocus={false} type="text" />
</div>
        </div>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
    
  )
}
