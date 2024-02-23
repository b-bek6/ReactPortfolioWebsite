import React from 'react'
import MongoDB from './Buttons/MongoDB'
import DotNet from './Buttons/DotNet'
import Reacts from './Buttons/Reacts'
import Node from './Buttons/Node'
import Express from './Buttons/Express'

export default function () {
  return (
    <div className='grid grid-flow-col md:overflow-visible overflow-scroll gap-4'>

        <Reacts/>
        <DotNet/>
        <MongoDB/>
        <Node/>
        
    </div>
  )
}
