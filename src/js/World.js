import Ball from './Ball'

export default class World {

  constructor ({width, height, backgroundColor, floorColor, gridCellSize, gridLineWidth, gridLineColor}) {
    this.width = width || 640
    this.height = height || 480
    this.gridCellSize = gridCellSize
    this.gridLineWidth = gridLineWidth
    this.colors = {
      background: backgroundColor || '#000000',
      floor: floorColor || '#cccccc',
      grid: gridLineColor
    }
    this.init()
  }

  calculateFloorPosition () {
    // Set floor height to 10% from world bottom line
    this.floorHeight = this.height / 100 * 10
    // Make floor top fit to one of grid lines
    this.floorHeight += this.floorHeight % this.gridCellSize
    this.floorY = this.height - this.floorHeight
  }

  init () {
    this.calculateFloorPosition()
  }

  drawBackground (context) {
    context.fillStyle = this.colors.background
    context.fillRect(0, 0, this.width, this.height)
  }

  drawLine (context, fromX, fromY, toX, toY) {
    context.strokeStyle = this.colors.grid
    context.lineWidth = this.gridLineWidth
    context.beginPath()
    context.moveTo(fromX, fromY)
    context.lineTo(toX, toY)
    context.closePath()
    context.stroke()
  }

  drawGrid (context, cellSize) {
    // Vertical lines
    for (let i = 0; i <= this.width; i += this.gridCellSize) {
      this.drawLine(context, i, 0, i, this.height)
    }
    // Horizontal lines
    for (let i = 0; i <= this.height; i += this.gridCellSize) {
      this.drawLine(context, 0, i, this.width, i)
    }
  }

  drawFloor (context) {
    context.fillStyle = this.colors.floor
    context.fillRect(0, this.floorY, this.width, this.floorHeight)
  }

  addBall (x, y, radius, color) {
    this.ball = new Ball(x, y, radius, color)
  }

  checkBallCollision () {
    if ((this.ball.y + this.ball.radius) >= this.floorY) {
      this.ball.y = this.floorY - this.ball.radius
      this.ball.reverse()
    }
  }

  update () {
    if (this.ball) {
      this.ball.update()
      this.checkBallCollision()
    }
  }

  draw (context) {
    this.drawBackground(context)
    this.drawGrid(context)
    this.drawFloor(context)
    if (this.ball) {
      this.ball.draw(context)
    }
  }

}
