const rez = 20
const MIN_SWIPE = 24

const DIRECTIONS = {
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
}

let snake
let food
let w
let h
let gameOver
let touchStart

function setup() {
  const canvas = createCanvas(400, 400)
  w = floor(width / rez)
  h = floor(height / rez)
  frameRate(8)
  bindTouchControls(canvas.elt)
  startGame()
}

function startGame() {
  snake = new Snake()
  gameOver = false
  placeFood()
  loop()
}

function placeFood() {
  const free = []
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      if (!snake.occupies(x, y)) {
        free.push(createVector(x, y))
      }
    }
  }
  food = random(free)
}

function keyPressed() {
  const direction = DIRECTIONS[key]
  if (direction && !gameOver) {
    snake.setDir(...direction)
  }
  if (gameOver && (key === ' ' || keyCode === ENTER)) {
    startGame()
  }
  if (direction || key === ' ') {
    return false // keeps these keys from scrolling the page
  }
}

function bindTouchControls(element) {
  element.style.touchAction = 'none'

  element.addEventListener('touchstart', (event) => {
    touchStart = event.changedTouches[0]
  })

  element.addEventListener('touchend', (event) => {
    if (gameOver) {
      startGame()
      return
    }
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.clientX
    const dy = touch.clientY - touchStart.clientY
    if (max(abs(dx), abs(dy)) < MIN_SWIPE) {
      return
    }
    if (abs(dx) > abs(dy)) {
      snake.setDir(Math.sign(dx), 0)
    } else {
      snake.setDir(0, Math.sign(dy))
    }
  })
}

function draw() {
  push()
  scale(rez)
  background(220)

  if (snake.eat(food)) {
    placeFood()
  }
  snake.update()
  snake.show()

  if (food) {
    noStroke()
    fill(255, 0, 0)
    rect(food.x, food.y, 1, 1)
  }
  pop()

  showScore()

  if (!food || snake.hasCrashed()) {
    gameOver = true
    showGameOver()
    noLoop()
  }
}

function showScore() {
  noStroke()
  fill(0, 150)
  textSize(16)
  textAlign(LEFT, TOP)
  text(`Score ${snake.len}`, 10, 10)
}

function showGameOver() {
  background(0, 180)
  noStroke()
  fill(255)
  textAlign(CENTER, CENTER)
  textSize(28)
  text(food ? 'Game over' : 'You win!', width / 2, height / 2 - 24)
  textSize(16)
  text(`Score ${snake.len}`, width / 2, height / 2 + 12)
  text('Press space or tap to play again', width / 2, height / 2 + 36)
}
