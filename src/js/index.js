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
