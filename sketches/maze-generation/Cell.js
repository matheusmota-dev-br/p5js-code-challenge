class Cell {
  constructor(i, j) {
    this.i = i
    this.j = j
    // top, right, bottom, left
    this.walls = [true, true, true, true]
    this.visited = false
  }

  randomUnvisitedNeighbor() {
    const neighbors = [
      grid[index(this.i, this.j - 1)],
      grid[index(this.i + 1, this.j)],
      grid[index(this.i, this.j + 1)],
      grid[index(this.i - 1, this.j)],
    ].filter((cell) => cell && !cell.visited)

    return random(neighbors)
  }

  highlight() {
    noStroke()
    fill(0, 0, 255, 100)
    rect(this.i * w, this.j * w, w, w)
  }

  show() {
    const x = this.i * w
    const y = this.j * w

    stroke(255)
    if (this.walls[0]) {
      line(x, y, x + w, y)
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w)
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w)
    }
    if (this.walls[3]) {
      line(x, y + w, x, y)
    }

    if (this.visited) {
      noStroke()
      fill(255, 0, 255, 100)
      rect(x, y, w, w)
    }
  }
}
