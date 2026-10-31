let sun

function setup() {
  createCanvas(600, 600, WEBGL)

  sun = new Planet(50, 0, 0)
  sun.spawnMoons(4, 1)
}

function draw() {
  background(0)
  orbitControl()
  lights()
  sun.show()
  sun.orbit()
}
