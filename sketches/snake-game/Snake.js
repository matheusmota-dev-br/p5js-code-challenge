class Snake {
  constructor() {
    this.len = 0
    this.body = [createVector(floor(w / 2), floor(h / 2))]
    this.xdir = 0
    this.ydir = 0
    this.movedX = 0
    this.movedY = 0
  }

  get head() {
    return this.body[this.body.length - 1]
  }

  setDir(x, y) {
    // Compared with the last move, not the last key: two quick presses in
    // the same tick must not turn the snake back into itself.
    const isReversal = x === -this.movedX && y === -this.movedY
    if (this.len > 0 && isReversal) {
      return
    }
    this.xdir = x
    this.ydir = y
  }

  update() {
    const head = this.head.copy()
    head.x += this.xdir
    head.y += this.ydir
    this.body.shift()
    this.body.push(head)
    this.movedX = this.xdir
    this.movedY = this.ydir
  }

  grow() {
    this.len++
    this.body.push(this.head.copy())
  }

  eat(pos) {
    if (pos && this.head.x === pos.x && this.head.y === pos.y) {
      this.grow()
      return true
    }
    return false
  }

  occupies(x, y) {
    return this.body.some((part) => part.x === x && part.y === y)
  }

  hasCrashed() {
    const { x, y } = this.head
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true
    }
    return this.body.slice(0, -1).some((part) => part.x === x && part.y === y)
  }

  show() {
    noStroke()
    fill(0)
    this.body.forEach((part) => rect(part.x, part.y, 1, 1))
  }
}
