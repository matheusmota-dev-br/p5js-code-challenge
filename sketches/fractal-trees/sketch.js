const SHRINK = 2 / 3
const MIN_BRANCH = 4

let angle
let slider

function setup() {
  createCanvas(400, 400)
  slider = createSlider(0, TWO_PI, PI / 4, 0.01)
  slider.parent('stage')
  slider.attribute('aria-label', 'Branch angle')
}

function draw() {
  background(51)
  angle = slider.value()

  translate(width / 2, height)
  stroke(255)
  branch(100)
}

function branch(len) {
  line(0, 0, 0, -len)
  translate(0, -len)
  if (len > MIN_BRANCH) {
    fork(angle, len)
    fork(-angle, len)
  }
}

function fork(forkAngle, len) {
  push()
  rotate(forkAngle)
  branch(len * SHRINK)
  pop()
}
