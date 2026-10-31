class Star {
  constructor() {
    this.respawn()
  }

  respawn() {
    this.x = random(-width, width)
    this.y = random(-height, height)
    this.z = random(width)
    this.pz = this.z
  }

  update() {
    this.z -= speed
    if (this.z < 1) {
      this.respawn()
      this.z = width
      this.pz = width
    }
  }

  show() {
    const sx = map(this.x / this.z, 0, 1, 0, width)
    const sy = map(this.y / this.z, 0, 1, 0, height)
    const px = map(this.x / this.pz, 0, 1, 0, width)
    const py = map(this.y / this.pz, 0, 1, 0, height)

    this.pz = this.z
    stroke(255)
    line(px, py, sx, sy)
  }
}
