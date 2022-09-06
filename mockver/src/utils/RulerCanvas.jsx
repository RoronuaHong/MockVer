// 获取间隔
function getSparsity(scale) {
  if(scale <= 1) {
    return 100
  } else if(scale <= 3) {
    return 50
  } else if(scale <= 4) {
    return 20
  } else if(scale <= 5) {
    return 10
  }

  return 5
}

function isCloseToInteger(num) {
  return Math.abs(num - Math.round(num)) < 0.0000001
}

function getFixed(sparsity) {
  const pointIdx = String(sparsity).indexOf('.')
  const len = String(sparsity).length

  return pointIdx < 0 ? 0 : len - pointIdx - 1
}



// TODO: 参数:
//   1. 方向 vertical | horizatal
//   2. 缩放 scale
/**
 * 
 * @param {*} dom 
 * @param {*} mode 
 * @param {*} curScale 
 * @param {*} mockInfo 
 */
const RulerCanvas = (dom, mode, curScale = 100, mockInfo, setMockInfo) => {
  const canvas = dom.current
  const ctx = canvas.getContext('2d')
  
  // 开始完成ruler部分
  const { width, height } = canvas.getBoundingClientRect()
  const dpi = 2

  // 设置canvas的长度和宽度
  canvas.width = width * dpi
  canvas.height = height * dpi
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  // 设置偏移量
  const transitionVal = 24

  // 是否确定设置参考线
  let isGuides = false

  ctx.beginPath()
  ctx.strokeStyle = '#fff'
  ctx.fillStyle = '#fff'

  let { width: w, height: h } = canvas

  w /= dpi
  h /= dpi

  ctx.scale(dpi, dpi)
  ctx.clearRect(0, 0, w, h)
  ctx.save()

  const offsetX = 0
  const offsetY = 0
  const scale = curScale / 200
  const offset = 'vertical' ? offsetX : offsetY

  const sparsity = getSparsity(scale)

  // 间隔内有多少条线
  const part = 10
  const pixelPerUnit = scale * sparsity
  const gap = pixelPerUnit / part
  const fixed = getFixed(sparsity)
  let index = offset % gap > 0 ? gap - (offset % gap) : -offset % gap

  // vertical
  if(mode === `vertical`) {
    ctx.translate(transitionVal, 0)

    do {
      const num = ((offset + index) / pixelPerUnit) * sparsity

      if(isCloseToInteger(num / sparsity)) {

        ctx.moveTo(index, 0)
        ctx.lineTo(index, h)

        const text = num.toFixed(fixed)
        // const textWidth = ctx.measureText(text).width

        ctx.fillText(text, index + 5, 11)
      } else {
        ctx.moveTo(index, h * 0.7)
        ctx.lineTo(index, h)
      }

      index += gap
    } while(index < w)
  } else {
    ctx.translate(0, transitionVal)

    do {
      const num = ((offset + index) / pixelPerUnit) * sparsity

      if(isCloseToInteger(num / sparsity)) {
        // ctx.moveTo(w * 0.5, index)
        ctx.moveTo(0, index)
        ctx.lineTo(w, index)
  
        const text = num.toFixed(fixed)
  
        ctx.save()
        ctx.rotate((-90 * Math.PI) / 180)
  
        const textWidth = ctx.measureText(text).width
  
        // ctx.fillText(text, -(index + textWidth / 2), 12)
        ctx.fillText(text, -index + 5, 11)

        ctx.rotate((0 * Math.PI) / 180)
        ctx.restore()
      } else {
        ctx.moveTo(w * 0.7, index)
        ctx.lineTo(w, index)
      }

      index += gap
    } while(index < h)
  }

  // 鼠标移动事件
  canvas.onmousemove = e => {
    let arr = []
    isGuides = false

    // TODO: 先完成垂直方向的参考线
    if(mode === `vertical`) {

      // 获取当前刻度尺的值
      // console.log(e.layerX)

      if(mockInfo.verLineArr.length < 1) {
        arr = [
          ...arr,
          {
            key: `ver-${mockInfo.verLineArr.length}`,
            temp: true,
            top: `0px`,
            left: `798px`
          }
        ]

        const data = {
          ...mockInfo,
          tipVal: 100,
          verLineArr: arr
        }

        setMockInfo(data)
      }
    } else {

    }
  }

  // 鼠标点击事件
  canvas.onmousedown = e => {
    isGuides = true
  }

  // 鼠标移开事件
  canvas.onmouseleave = e => {

    // TODO: 先删除垂直方向的参考线
    if(mode === `vertical`) {
      const resArr = mockInfo.verLineArr
      
      resArr.pop()

      if(!isGuides) {
        setMockInfo({
          ...mockInfo,
          verLineArr: resArr
        })
      }
    } else {
      const resArr = mockInfo.horLineArr
      
      resArr.pop()

      if(!isGuides) {
        setMockInfo({
          ...mockInfo,
          horLineArr: resArr
        })
      }
    }

    // console.log(`鼠标移开事件`)
  }

  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}


export default RulerCanvas
