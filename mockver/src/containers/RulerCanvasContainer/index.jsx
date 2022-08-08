import React, { useState } from 'react'

import RulerCanvasWidget from '@/widgets/RulerCanvas'

import './index.scss'

const RulerCanvasContainer = () => {
  return (
    <div className="rule-wrapper" tabIndex={`0`}>
      <div className='ruler-guides-container'>
        <div className='ruler' style={{ width: `100%` }}>
          <RulerCanvasWidget width={`100%`} height={`24px`} cursor={`col-resize`} mode={`vertical`} />
        </div>
      </div>
      <div className='ruler-guides-container'>
        <div className='ruler' style={{ height: `100%` }}>
          <RulerCanvasWidget width={`24px`} height={`100%`} cursor={`row-resize`} mode={`horizontal`} />
        </div>
      </div>
      <div className='rule-corner'>
        
      </div>
    </div>
  )
}

export default RulerCanvasContainer

