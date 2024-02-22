import React from 'react'
import img from '../assets/img/portfolio/jobportal.png'

export default function ProjectCard({title}) {
  return (
    <>

<a href="#" class="flex justify-between flex-col sm:flex-row text-slate-900  items-center bg-primary  rounded-lg dark:text-white  md:flex-row p-4  dark:bg-darkPrimary transition-all ease-in-out duration-200">
        <h5 class="mb-2 text-md  ">{title}</h5>
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
