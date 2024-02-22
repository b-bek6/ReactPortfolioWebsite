import React from 'react'

export default function Timeline() {
  return (
    <div>
        
<ol class="relative border-s border-border dark:border-borderDark">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg- rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white animate-pulse"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2001</time>
        <h3 class="text-md  text-[#F02EA6] dark:text-[#F02EA6]">The day I said 'hello' to the world!</h3>
        <p class="mb-4 text-base font-normal text-gray-500 opacity-75 dark:text-subtext">everything is based on what my mom said, I was born on march 2001, in beni myagdi, </p>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2014</time>
        <h3 class="text-md  text-[#3DCF8E]">Day I saw a computer</h3>
        <p class="text-base font-normal text-gray-1000 text-subtext">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
         {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-backgroundDark dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Want to hear more? <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/> </svg></a> */}
    </li>
    <li class="ms-4 mb-10">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2021</time>
        <h3 class="text-md  text-blue-500">Joined <a className='underline italic' href="">Tribhuvan University</a> As Bsc CSIT student </h3>
        <p class="text-base font-normal text-gray-500 dark:text-subtext">i'll discuss about this more.. </p>
    </li>
    <li class="ms-4 mb-10">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-md  text-[#3DCF8E]">Joined <a className='underline italic' href="https://mindrisers.com.np">Mindrisers</a> As a frontend developer </h3>
        <p class="text-base font-normal text-gray-500 dark:text-subtext">i'll discuss about this more.. </p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
        <h3 class="text-lg   text-red-500">left <a className='underline italic' href="">Mindrisers</a> As a frontend developer </h3>
        <p class="text-base font-normal text-gray-500 dark:text-subtext">i left because of my studies.</p>
    </li>
</ol>


    </div>
  )
}
