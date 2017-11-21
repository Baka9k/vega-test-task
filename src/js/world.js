export default class BallSimulation {

  constructor (width, height, backgroundColor, floorColor) {
    this.width = width || 640
    this.height = height || 480
    this.colors = {
      background: backgroundColor || '#000000',
      floor: floorColor || '#cccccc'
    }
    this.init()
  }

  calculateFloorPosition () {
    // Set floor height to 10% from world bottom line
    this.floorHeight = this.height / 100 * 10
    this.floorY = this.height - this.floorHeight
  }

  init () {
    this.calculateFloorPosition()
  }

  drawBackground (context) {
    context.fillStyle = this.colors.background
    context.fillRect(0, 0, this.width, this.height)
  }

  drawFloor (context) {
    context.fillStyle = this.colors.floor
    context.fillRect(0, this.floorY, this.width, this.floorHeight)
  }

  draw (context) {
    this.drawBackground(context)
    this.drawFloor(context)
  }

}
