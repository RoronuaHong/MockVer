import React, { 
  useContext,
  Component,
  useEffect,
  useState,
  useRef
} from 'react'

import RulerCanvas from '@/utils/RulerCanvas'
import { MockContext } from '@/context/MockContext'

import './index.scss'

const RulerCanvasWidget = props => {
  const {
    width,
    height,
    cursor,
    mode
  } = props

  const canvasRef = React.useRef(null)
  const { mockInfo, setMockInfo } = useContext(MockContext)

  const {
    curScale
  } = mockInfo

  useEffect(() => {
    RulerCanvas(canvasRef, mode, curScale)
  })

  return (
    <div className='ruler-canvas-container' style={{ width, height, cursor }}>
      <canvas
        ref={canvasRef}
        id={`rulerCanvas`}
        style={{ width, height }}>
        Your browser does not support the canvas element。
      </canvas>
    </div>
  )
}

export default RulerCanvasWidget

// import React, { 
//   Component,
//   useState
// } from 'react'

// import RulerCanvas from '@/utils/RulerCanvas'

// import './index.scss'

// class RulerCanvasWidget extends Component {
//   constructor(props) {
//     super(props)
//     this.canvas = React.createRef()
//   }

//   componentDidUpdate(prevProps) {
//     console.log(prevProps)
//   }

//   componentDidMount() {
//     const {
//       mode,
//       mockInfo
//     } = this.props

//     const {
//       scaleNum
//     } = mockInfo

//     // TODO: 添加一个缩放curScale比例数。【添加reactContext】
//     RulerCanvas(this.canvas, mode, scaleNum)
//   }

//   render() {
//     const {
//       width,
//       height,
//       cursor,
//       mode,
//       mockInfo
//     } = this.props

//     return (
//       <div className='ruler-canvas-container' style={{ width, height, cursor }}>
//         <canvas
//           ref={this.canvas}
//           id={`rulerCanvas`}
//           style={{ width, height }}>
//           Your browser does not support the canvas element。
//         </canvas>
//       </div>
//     )
//   }
// }


// export default RulerCanvasWidget

