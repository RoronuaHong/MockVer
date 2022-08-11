import React, { useContext } from 'react'

import GuidesWidget from '@/widgets/GuidesWidget'
import { MockContext } from '@/context/MockContext'
import RulerCanvasWidget from '@/widgets/RulerCanvasWidget'

import './index.scss'

const RulerCanvasContainer = () => {
  const { mockInfo, setMockInfo } = useContext(MockContext)

  const {
    tipVal
  } = mockInfo

  return (
    <div className="rule-wrapper" tabIndex={`0`}>
      <div className='ruler-guides-container'>
        <div className='ruler' style={{ width: `100%` }}>
          <RulerCanvasWidget
            width={`100%`}
            height={`24px`}
            mode={`vertical`}
            cursor={`col-resize`} />
        </div>
        <GuidesWidget mode={`vertical`} style={{
          left: `798px`,
          top: `0px`,
          visibility: `visible`
        }} tipVal={tipVal} />
      </div>
      <div className='ruler-guides-container'>
        <div className='ruler' style={{ height: `100%` }}>
          <RulerCanvasWidget
            width={`24px`}
            height={`100%`}
            mode={`horizontal`}
            cursor={`row-resize`} />
        </div>
        <GuidesWidget mode={`horizontal`} style={{
          left: `0px`,
          top: `302px`,
          visibility: `visible`
        }} tipVal={tipVal} />
      </div>
      <div className='rule-corner'>

      </div>
    </div>
  )
}

export default RulerCanvasContainer

