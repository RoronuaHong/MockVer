import React, { useContext, useState } from 'react'
import { MockContext } from '@/context/MockContext'

import './index.scss'

const RightOperation = () => {

  // FIXME: 比例重新分配。
  const scaleArr = [10, 25, 50, 75, 100, 150, 200, 300, 400, 500, 600, 700, 800, 1000]
  const [scaleNum, setScaleNum] = useState(4)

  const { mockInfo, setMockInfo } = useContext(MockContext)

  const handleScaleNum = boolean => {
    let curNum = scaleNum

    if(boolean) {
      if(scaleNum < scaleArr.length - 1) {
        curNum = scaleNum + 1

        setScaleNum(scaleNum + 1)
      }
    } else {
      if(scaleNum > 0) {
        curNum = scaleNum - 1

        setScaleNum(scaleNum - 1)
      }
    }

    setMockInfo({
      ...mockInfo,
      curScale: scaleArr[curNum]
    })
  }

  return (
    <div className='right-operation'>
      <div className='dsm-c-rp-zoomer zoomer'>
        <div className='zoomer-content'>
          <div className={scaleNum === 0 ? 'zoom-btn disabled-zoom' : 'zoom-btn'} onClick={e => handleScaleNum(false)}>-</div>
          <span>{scaleArr[scaleNum]}%</span>
          <div className={scaleNum === scaleArr.length - 1 ? 'zoom-btn disabled-zoom' : 'zoom-btn'} onClick={e => handleScaleNum(true)}>+</div>
        </div>
      </div>
    </div>
  )
}

export default RightOperation
