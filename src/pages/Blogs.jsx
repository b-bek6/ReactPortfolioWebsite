import React from 'react'
import Blog from '../components/Blog'
import Vlog from '../components/Vlog'
export default function Blogs() {


  return (
    <div className='container mt-10 text-left text-darkPrimary dark:text-subtext'>
      <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700"></hr> 
       <p className="text-2xl  text-left dark:text-white mb-5 "> web logs</p>
        <Blog/>
        <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700"></hr> 

        <p className="text-2xl mt-10 text-left dark:text-white mb-5 "> Video logs</p>
        <Vlog/>
        <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700"></hr> 


        <p></p>
    </div>
  )
}
