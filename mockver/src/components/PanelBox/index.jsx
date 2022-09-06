import React, { useState } from 'react'
import ProjectPanel from '../ProjectPanel'

import './index.scss'

const PanelBox = () => {
  const [tabIndex, setTabIndex] = useState(0)

  let tabList = [{
    index: 0,
    name: `页面`
  }, {
    index: 1,
    name: `图层`
  }]

  const onTabChange = index => {
    setTabIndex(index)
  }

  return (
    <div className='panel-box'>
      <div className='dsm-c-rp-tab-bar'>
        <div className={'tab-bar-select-indicator effect'} style={{
          left: tabIndex === 1 ? `50%` : 0,
          transitionProperty: `all`
        }}>
          <div className='horizontal'></div>
        </div>
        <div className='tab-bar-content'>
          {tabList.map((item, index) => (
            <div onClick={() => onTabChange(index)} key={item.index}
              className={index === tabIndex ? `bar-item selected` : `bar-item`}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <ProjectPanel />
    </div>
  )
}


export default PanelBox
