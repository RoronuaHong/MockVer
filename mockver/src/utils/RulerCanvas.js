const MAJOR_INTERVAL_RATIO = 0.5,
		MINOR_INTERVAL_RATIO = 0.2,
		TICKS_PER_MAJOR_INTERVAL = 10,
		CURSOR_FPS = 48,
		GUTTER_SIZE = 15

const RulerCanvas = (dom) => {
  const canvas = dom.current
  const context = canvas.getContext('2d')

  // 开始完成ruler部分。
  const cursor = document.createElement('canvas')
  const ruler = document.createElement('img')

  const cursor_ctx = cursor.getContext('2d')

  document.body.appendChild(cursor)
  cursor.width = canvas.width
  cursor.height = canvas.height

  cursor.className = canvas.className

  cursor.style.zIndex = (canvas.style.zIndex + 1) || 1
  
  cursor.x = cursor.currentX = 0
  cursor.y = cursor.currentY = 0

  fillContextWithRuler(context, ruler, canvas.width, canvas.height)
}

const fillContextWithRuler = (context, ruler, width, height) => {
  const pattern_holder = document.createElement('canvas'),
				pattern_ctx = pattern_holder.getContext('2d')

        context.fillStyle = context.createPattern(ruler, 'repeat-x')
        context.fillRect(GUTTER_SIZE, 0, width, height)
  
        pattern_holder.width = width
        pattern_holder.height = 100
  
        pattern_ctx.translate(0, 0)
        pattern_ctx.scale(-1, 1)
        pattern_ctx.rotate(Math.PI / 4 * 2)
        pattern_ctx.drawImage(ruler, 0, 0)
  
        context.fillStyle = context.createPattern(pattern_holder, 'repeat-y')
        context.fillRect(0, GUTTER_SIZE, width, width)
}

export default RulerCanvas