import React, { useContext } from 'react'

import GuidesWidget from '@/widgets/GuidesWidget'
import { MockContext } from '@/context/MockContext'
import RulerCanvasWidget from '@/widgets/RulerCanvasWidget'

import './index.scss'

const RulerCanvasContainer = () => {
  const { mockInfo, setMockInfo } = useContext(MockContext)

  const {
    tipVal,
    verLineArr,
    horLineArr
  } = mockInfo

  // console.log(verLineArr.length)

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
        {verLineArr.map(item => {
          return (
            <GuidesWidget
              key={item.key}
              temp={item.temp}
              mode={`vertical`} 
              style={{
                left: item.left,
                top: item.top,
                visibility: `visible`
              }} tipVal={tipVal} />
          )
        })}
      </div>
      <div className='ruler-guides-container'>
        <div className='ruler' style={{ height: `100%` }}>
          <RulerCanvasWidget
            width={`24px`}
            height={`100%`}
            mode={`horizontal`}
            cursor={`row-resize`} />
        </div>
        {/* <GuidesWidget mode={`horizontal`} style={{
          left: `0px`,
          top: `302px`,
          visibility: `visible`
        }} tipVal={tipVal} /> */}
        {horLineArr.map(item => {

        })}
      </div>
      <div className='rule-corner'>

      </div>
    </div>
  )
}

export default RulerCanvasContainer

