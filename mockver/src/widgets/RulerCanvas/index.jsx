import React, { 
  Component,
  useState
} from 'react'

import RulerCanvas from '@/utils/RulerCanvas'

import './index.scss'

class RulerCanvasWidget extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount() {
    const {
      mode
    } = this.props

    // TODO: 添加一个缩放curScale比例数。【添加reactContext】
    RulerCanvas(this.canvas, mode, 1)
  }

  render() {
    const {
      width,
      height,
      cursor
    } = this.props

    return (
      <div className='ruler-canvas-container' style={{ width, height, cursor }}>
        <canvas
          ref={this.canvas}
          id={`rulerCanvas`}
          style={{ width, height }}>
          Your browser does not support the canvas element。
        </canvas>
      </div>
    )
  }
}


export default RulerCanvasWidget

