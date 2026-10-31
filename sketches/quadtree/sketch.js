const POINT_COUNT = 300
const CAPACITY = 4
const QUERY_SIZE = 25

let qtree

function setup() {
  createCanvas(400, 400)
  qtree = new QuadTree(new Rectangle(200, 200, 200, 200), CAPACITY)
  for (let i = 0; i < POINT_COUNT; i++) {
    const x = randomGaussian(width / 2, width / 8)
    const y = randomGaussian(height / 2, height / 8)
    qtree.insert(new Point(x, y))
  }
}

function draw() {
  background(0)
  qtree.show()

  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
    return
  }

  const range = new Rectangle(mouseX, mouseY, QUERY_SIZE, QUERY_SIZE)
  stroke(0, 255, 0)
  rectMode(CENTER)
  rect(range.x, range.y, range.w * 2, range.h * 2)

  strokeWeight(4)
  for (const found of qtree.query(range)) {
    point(found.x, found.y)
  }
}
