// import Ball from './ball'
import World from './world'

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
    // this.ball = new Ball(20, '#ff0000')
    this.world = new World(this.width, this.height, '#000000', '#cccccc')
  }

  draw () {
    const ctx = this.context
    this.world.draw(ctx)
  }

  start () {
    this.draw()
  }

}
