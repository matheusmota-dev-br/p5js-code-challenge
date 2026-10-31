const w = 10
const STEPS_PER_FRAME = 3

let cols
let rows
let grid
let current
let stack

function setup() {
  const canvas = createCanvas(400, 400)
  canvas.mousePressed(restart)
  cols = floor(width / w)
  rows = floor(height / w)
  buildGrid()
}

function buildGrid() {
  grid = []
  stack = []
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid.push(new Cell(i, j))
    }
  }
  current = grid[0]
}

function restart() {
  buildGrid()
  loop()
}

function draw() {
  for (let i = 0; i < STEPS_PER_FRAME; i++) {
    step()
  }

  background(51)
  grid.forEach((cell) => cell.show())
  current.highlight()
}

function step() {
  current.visited = true

  const next = current.randomUnvisitedNeighbor()
  if (next) {
    next.visited = true
    stack.push(current)
    removeWalls(current, next)
    current = next
  } else if (stack.length > 0) {
    current = stack.pop()
  } else {
    noLoop()
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1
  }
  return i + j * cols
}

function removeWalls(a, b) {
  const x = a.i - b.i
  if (x === 1) {
    a.walls[3] = false
    b.walls[1] = false
  } else if (x === -1) {
    a.walls[1] = false
    b.walls[3] = false
  }

  const y = a.j - b.j
  if (y === 1) {
    a.walls[0] = false
    b.walls[2] = false
  } else if (y === -1) {
    a.walls[2] = false
    b.walls[0] = false
  }
}
