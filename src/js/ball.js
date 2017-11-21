export default class Ball {

  constructor (x, y, radius, color) {
    this.radius = radius || 72
    this.colors = color || '#000000'
    this.x = x || 0
    this.y = y || 0
    this.speed = 0
    this.direction = 'down'
  }

  draw (context) {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, this.radius, Math.PI * 2, true)
    context.closePath()
    context.fill()
  }

}
