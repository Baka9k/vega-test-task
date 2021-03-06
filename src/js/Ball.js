import Physics from './Physics'

export default class Ball {

  constructor (x, y, radius, color) {
    this.radius = radius || 30
    this.color = color || '#000000'
    this.x = x || 0
    this.y = y || 0
    this.initialY = y || 0
    this.speed = 0
  }

  update () {
    this.speed += Physics.G
    this.y += this.speed
  }

  reverse () {
    this.speed = -this.speed
    this.speed -= Math.sign(this.speed) * Physics.k
  }

  reset () {
    this.y = this.initialY
    this.speed = 0
  }

  draw (context) {
    context.fillStyle = this.color
    context.beginPath()
    context.arc(this.x, this.y, this.radius, this.radius, Math.PI * 2, true)
    context.closePath()
    context.fill()
  }

}
