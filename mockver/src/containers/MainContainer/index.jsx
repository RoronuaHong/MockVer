import React, { useState } from 'react'

import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'
import WorkContainer from '@/containers/WorkContainer'

import ApplicationBar from '@/components/ApplicationBar'

import './index.scss'

const MainContainer = () => {
  return (
    <div className='main-container'>
      <ApplicationBar />
      <div className='content'>
        <LeftPanel />
        <WorkContainer />
        <RightPanel />
      </div>
    </div>
  )
}


export default MainContainer
