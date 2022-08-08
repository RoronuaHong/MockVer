import React, { useState } from 'react'

import CurtNavigation from '@/components/CurtNavigation'
import RulerCanvasContainer from '@/containers/RulerCanvasContainer'

import './index.scss'

const WorkContainer = () => {
  const [navSeled, setNavSeled] = useState(false)

  const handleNavSeled = () => {
    setNavSeled(!navSeled)
  }

  return (
    <div className='worker-container'>
      <div className='worker-space-container'>
        <div id='workspace'
          tabIndex='-1'
          className='workspace'
          style={{ cursor: `default` }}>
          <RulerCanvasContainer />
          {navSeled && <CurtNavigation />}
        </div>
      </div>
      <div className='worker-container-status-bar'>
        <div className='group-path'>
          <div className='project-type'>
            项目类型
          </div>
        </div>
        <div className={navSeled ? `status-bar-navigation selected` : `status-bar-navigation`}
          onClick={handleNavSeled}>
          导航
        </div>
      </div>
    </div>
  )
}

export default WorkContainer
