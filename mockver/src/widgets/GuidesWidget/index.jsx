import React, { 
  useContext,
  Component,
  useEffect,
  useState,
  useRef
} from 'react'

import './index.scss'

const GuidesWidget = props => {
  const {
    style,
    tipVal,
    mode = `vertical`
  } = props

  return (
    <div className={`guides ${mode} temp`} style={style}>
      <span className='graduation-value-tip'>
        {tipVal}
      </span>
      <div className='hit-region'></div>
    </div>
  )
}

export default GuidesWidget

