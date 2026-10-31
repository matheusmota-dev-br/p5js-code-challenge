const SIGMA = 10
const RHO = 28
const BETA = 8 / 3
const DT = 0.01
// Older points are dropped so the frame rate stays stable over time.
const MAX_POINTS = 3000

let x = 0.01
let y = 0
let z = 0
let points = []

function setup() {
  createCanvas(800, 600, WEBGL)
  colorMode(HSB, 255)
}

function draw() {
  background(0)

  step()
  points.push(createVector(x, y, z))
  if (points.length > MAX_POINTS) {
    points.shift()
  }

  const camX = map(mouseX, 0, width, -200, 200)
  const camY = map(mouseY, 0, height, -200, 200)
  camera(camX, camY, height / 2 / tan(PI / 6), 0, 0, 0, 0, 1, 0)

  translate(0, 0, -80)
  scale(5)
  noFill()

  beginShape()
  points.forEach((point, i) => {
    stroke(i % 256, 255, 255)
    vertex(point.x, point.y, point.z)
  })
  endShape()
}

function step() {
  const dx = SIGMA * (y - x) * DT
  const dy = (x * (RHO - z) - y) * DT
  const dz = (x * y - BETA * z) * DT
  x += dx
  y += dy
  z += dz
}
