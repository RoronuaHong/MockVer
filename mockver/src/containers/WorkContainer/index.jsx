import React, { useState, useEffect } from 'react'

import CurtNavigation from '@/components/CurtNavigation'
import RulerCanvasContainer from '@/containers/RulerCanvasContainer'

import './index.scss'

const WorkContainer = () => {
  const [navSeled, setNavSeled] = useState(false)

  const handleNavSeled = () => {
    setNavSeled(!navSeled)
  }

  const scrollChange = () => {
    // TODO: 实现卡尺的上下移动【卡尺部分重新实现】。
    console.log(`鼠标滚动`)
  }

  useEffect(() => {
    window.addEventListener('mousewheel', scrollChange, true)

    return () => {
      window.removeEventListener('mousewheel', scrollChange, false)
    }
  }, [])

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
