import World from './World'

export default class BallSimulation {

  constructor (canvas) {
    if (!canvas) {
      console.log(`Error in BallSimulation constructor: you should call 'new BallSimulation()' with valid 
      DOM canvas object as argument`)
      return
    }
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
  }

  init () {
    this.world = new World({
      width: this.width,
      height: this.height,
      backgroundColor: '#ffffff',
      floorColor: '#99CC99',
      gridCellSize: 24,
      gridLineWidth: 0.3,
      gridLineColor: '#99CC99'
    })
    this.world.addBall(300, 100, 30, '#000000')
  }

  draw () {
    const ctx = this.context
    this.world.draw(ctx)
  }

  start () {
    this.draw()
  }

}
