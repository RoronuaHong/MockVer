import React, { useState } from 'react'

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

const ApplicationBar = () => {
  const [tooltipSelArr, setTooltipSelArr] = useState([0, 0, 0, 0])
  const [redoInfoArr, setRedoInfoArr] = useState([])

  const handleBarClick = index => {
    let newArr = tooltipSelArr

    newArr[index] = newArr[index] === 0 ? 1 : 0 

    setTooltipSelArr([...newArr])
  }

  const handleDoClick = index => {
    console.log(index)
  }

  return (
    <div className="application-bar">
      <div className="left-operation">
        仿 Mockplus 部分功能展示
      </div>
      <div className="editor-operation">
        {data && data.tooltipArr.map(item => (
          <div
            key={item.index}
            className={
              tooltipSelArr[item.index] === 0 ? 
                "dsm-c-rp-icon-tooltip" : 
                "dsm-c-rp-icon-tooltip tooltip-seled" } 
            title={item.title}
            onClick={e => handleBarClick(item.index)}>
            {item.name}
          </div>
        ))}
        {data && data.redoArr.map(item => (
          <div 
            key={item.index} 
            className={`dsm-c-rp-icon-tooltip-redo tooltip-disabled`}
            title={item.title}
            onClick={e => handleDoClick(item.index)}>
            {item.name}
          </div>
        ))}
      </div>
      <div className="right-operation">
        <div className="dsm-c-rp-zoomer">
          
        </div>  
      </div>
    </div>
  )
}

export default ApplicationBar
