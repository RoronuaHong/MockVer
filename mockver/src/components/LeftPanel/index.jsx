import React, { useState } from 'react'
import { Resizable } from 're-resizable'

import SeparatorDragger from '@/components/SeparatorDragger'

import './index.scss'

const LeftPanel = () => {
  const [width, setWidth] = useState()

  const onResizeStart = (e) => {
    // console.log("onResizeStart执行")
  }

  const onResize = (e) => {
    // console.log("onResize执行")
  }

  const onResizeStop = (e) => {
    // console.log("onResizeStop执行")
  }

  return (
    <div className="left-panel">
      <Resizable
        maxWidth={700}
        enable={{ top: false, right: true, bottom: false, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}
        onResize={e => onResize(e)}
        onResizeStart={(e) => onResizeStart(e)}
        onResizeStop={(e) => onResizeStop(e)}>
        <div className="content-panel">
          ContentPanel
        </div>
      </Resizable>
      {/* <SeparatorDragger handleSetWidth={setWidth} /> */}
    </div>
  )
}

export default LeftPanel
