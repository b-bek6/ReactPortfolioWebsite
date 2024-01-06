import React from 'react'

export default function NavigationBar() {
  return (
    <div className=' container mt-16 text-black dark:text-white opacity-60 '>
        <ul className='flex gap-4 '>
            <li><a className='font-normal' href="/">home</a></li>
            <li><a className='font-normal' href="/blog">logs</a></li>
            <li><a className='font-normal' href="/projects">projects</a></li>
            <li><a className='font-normal' href="/projects">contact me</a></li>
        </ul>
    </div>
  )
}
