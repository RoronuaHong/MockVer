import React, { useState } from 'react'

import './index.scss'

const SeparatorDragger = props => {
  const {
    handleSetWidth
  } = props

  const handleMouseDown = e => {
    var e_down = e || window.event
    
    
  }

  return (
    <div className="separator-dragger"
      onMouseDown={handleMouseDown}>
      
    </div>
  )
}

export default SeparatorDragger
