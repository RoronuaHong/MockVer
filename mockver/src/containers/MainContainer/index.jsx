import React, { useState } from 'react'

import LeftPanel from '@/components/LeftPanel'
import ApplicationBar from '@/components/ApplicationBar'

import './index.scss'

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
