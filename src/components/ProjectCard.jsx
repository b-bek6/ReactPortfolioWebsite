import React from 'react'
import img from '../assets/img/portfolio/jobportal.png'

export default function ProjectCard() {
  return (
    <>

<a href="#" class="flex justify-between flex-col sm:flex-row text-slate-400  items-center bg-primary  rounded-lg dark:text-white  md:flex-row p-4  dark:bg-darkPrimary transition-all ease-in-out duration-200">
    {/* <img class="object-cover rounded-t-lg w-fit h-auto sm:w-48 sm:h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt="" /> */}
    {/* <div class="flex flex-col justify-between p-4 leading-normal"> */}
        <h5 class="mb-2 text-2xl font-bold tracking-tight   ">Job Portal</h5>
        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div> */}
    <div>
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
</a>

    
    
    </>
  )
}
