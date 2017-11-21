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
    this.center = {
      x: this.width / 2,
      y: this.height / 2
    }
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
    this.world.addBall(this.center.x, 100, 32, '#000000')
  }

  update () {
    this.world.update()
  }

  draw () {
    this.world.draw(this.context)
  }

  start () {
    setInterval(() => {
      this.update()
      this.draw()
    })
  }

}
