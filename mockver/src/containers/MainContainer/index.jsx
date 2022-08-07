import React, { useState } from 'react'

import LeftPanel from '@/components/LeftPanel'
import ApplicationBar from '@/components/ApplicationBar'

import './index.scss'

const data = {
  tooltipArr: [{
    index: 0,
    name: `流程图`,
    title: `流程图模式`
  }, {
    index: 1,
    name: `辅助画板`,
    title: `添加辅助画板(A)`
  }, {
    index: 2,
    name: `钢笔`,
    title: `钢笔(P)`
  }, {
    index: 3,
    name: `铅笔`,
    title: `铅笔`
  }],
  redoArr: [{
    index: 0,
    name: `撤销`,
    title: `撤销(CTRL + Z)`
  }, {
    index: 1,
    name: `重做`,
    title: `重做(CTRL + Y)`
  }]
}

const MainContainer = () => {
  return (
    <div className="main-container">
      <ApplicationBar />
      <div className="content">
        <LeftPanel />
      </div>
    </div>
  )
}

export default MainContainer
