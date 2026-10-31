const STAR_COUNT = 1000
const IDLE_SPEED = 12
const MAX_SPEED = 50

let stars = []
let speed = IDLE_SPEED

function setup() {
  createCanvas(500, 500)
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star())
  }
}

function draw() {
  const isOverCanvas =
    mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height
  speed = isOverCanvas ? map(mouseX, 0, width, 0, MAX_SPEED) : IDLE_SPEED

  background(0)
  translate(width / 2, height / 2)
  stars.forEach((star) => {
    star.update()
    star.show()
  })
}
