import React, { useState } from 'react'

import './index.scss'

const MainContainer = () => {
  const [isTooltipSeled, setIsTooltipSeled] = useState(false)

  const handleClick = () => {
    setIsTooltipSeled(isTooltipSeled === true ? false : true)

    console.log(isTooltipSeled)
  }

  return (
    <div>
      <div className="application-bar">
        <div className="left-operation" onClick={handleClick}>
          仿 Mockplus 部分功能展示
        </div>
        {/* <div className="editor-operation"> */}
          <div className={ 
            isTooltipSeled === false ? 
              "dsm-c-rp-icon-tooltip" : 
              "dsm-c-rp-icon-tooltip tooltip-seled" } 
            title='流程图模式' 
            onClick={handleClick}>
            流程图
          </div>
          <div className={ 
            isTooltipSeled === false ? 
              "dsm-c-rp-icon-tooltip" : 
              "dsm-c-rp-icon-tooltip tooltip-seled" } 
            title='流程图模式' 
            onClick={handleClick}>
            辅助画板
          </div>
          <div className={ 
            isTooltipSeled === false ? 
              "dsm-c-rp-icon-tooltip" : 
              "dsm-c-rp-icon-tooltip tooltip-seled" }
            title='流程图模式' 
            onClick={handleClick}>
            钢笔
          </div>
          <div className={ 
            isTooltipSeled === false ? 
            "dsm-c-rp-icon-tooltip" : 
            "dsm-c-rp-icon-tooltip tooltip-seled" } 
              title='流程图模式' 
              onClick={handleClick}>
            铅笔
          </div>
          <div className={ 
            isTooltipSeled === false ? 
            "dsm-c-rp-icon-tooltip" : 
            "dsm-c-rp-icon-tooltip tooltip-seled" } 
              title='流程图模式' 
              onClick={handleClick}>
            撤销
          </div>
          <div className={ isTooltipSeled === false ? 
            "dsm-c-rp-icon-tooltip" : 
            "dsm-c-rp-icon-tooltip tooltip-seled" } 
              title='流程图模式' 
              onClick={handleClick}>
            重做
          </div>
        {/* </div> */}
        <div className="right-operation">
          <div className="dsm-c-rp-zoomer">

          </div>  
        </div>
      </div>
    </div>
  )
}

export default MainContainer
