import Simulation from './Simulation'
import '../scss/styles.scss'

// Create canvas and set its size to fit #canvas-container div
const canvas = document.createElement('canvas')
const element = document.getElementById('canvas-container')
canvas.width = element.clientWidth
canvas.height = element.clientHeight
element.appendChild(canvas)

// Start simulation in this canvas
const simulation = new Simulation(canvas)
simulation.init()
simulation.start()

// Init controls
const startButton = document.getElementById('resume')
const pauseButton = document.getElementById('pause')
const resetButton = document.getElementById('reset')
startButton.onclick = e => simulation.resume()
pauseButton.onclick = e => simulation.pause()
resetButton.onclick = e => simulation.reset()
