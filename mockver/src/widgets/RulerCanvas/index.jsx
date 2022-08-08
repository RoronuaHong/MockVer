import React, { useState } from 'react'

import './index.scss'

const RulerCanvasWidget = props => {
  const {
    width,
    height,
    cursor
  } = props

  return (
    <div className='ruler-canvas-container' style={{ width, height, cursor }}>
      <canvas style={{ width, height }} width={width} height={height}>
        
      </canvas>
    </div>
  )
}

export default RulerCanvasWidget




