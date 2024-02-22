import React from 'react'
import MongoDB from './Buttons/MongoDB'
import DotNet from './Buttons/DotNet'
import Reacts from './Buttons/Reacts'
import Node from './Buttons/Node'
import Express from './Buttons/Express'

export default function () {
  return (
    <div className='flex gap-4'>
        <MongoDB/>
        <DotNet/>
        <Reacts/>
        <Node/>
        {/* <Express/> */}
        
    </div>
  )
}
