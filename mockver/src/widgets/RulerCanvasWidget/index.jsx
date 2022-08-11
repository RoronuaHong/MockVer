import React, { 
  useContext,
  Component,
  useEffect,
  useState,
  useRef
} from 'react'

import RulerCanvas from '@/utils/RulerCanvas'
import { MockContext } from '@/context/MockContext'

import './index.scss'

const RulerCanvasWidget = props => {
  const {
    width,
    height,
    cursor,
    mode
  } = props

  const canvasRef = React.useRef(null)
  const { mockInfo, setMockInfo } = useContext(MockContext)

  const {
    curScale
  } = mockInfo

  useEffect(() => {
    RulerCanvas(canvasRef, mode, curScale, mockInfo, setMockInfo)
  })

  return (
    <div className='ruler-canvas-container' style={{ width, height, cursor }}>
      <canvas
        ref={canvasRef}
        id={`rulerCanvas`}
        style={{ width, height }}>
        Your browser does not support the canvas element。
      </canvas>
    </div>
  )
}

export default RulerCanvasWidget


