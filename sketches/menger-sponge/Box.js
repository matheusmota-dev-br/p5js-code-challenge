class Box {
  constructor(x, y, z, r) {
    this.pos = createVector(x, y, z)
    this.r = r
  }

  generate() {
    const boxes = []
    const newR = this.r / 3

    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          // Skips the center of the cube and the center of each face.
          if (abs(x) + abs(y) + abs(z) > 1) {
            boxes.push(
              new Box(
                this.pos.x + x * newR,
                this.pos.y + y * newR,
                this.pos.z + z * newR,
                newR
              )
            )
          }
        }
      }
    }
    return boxes
  }

  show() {
    push()
    translate(this.pos.x, this.pos.y, this.pos.z)
    noStroke()
    fill(255)
    box(this.r)
    pop()
  }
}
