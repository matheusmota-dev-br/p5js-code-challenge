class Drop {
  constructor() {
    this.x = random(width)
    this.y = random(-500, -50)
    // z is the depth: closer drops are longer, thicker and faster.
    this.z = random(0, 20)
    this.yspeed = this.startSpeed()
    this.len = map(this.z, 0, 20, 10, 20)
  }

  startSpeed() {
    return map(this.z, 0, 20, 4, 10)
  }

  fall() {
    this.y += this.yspeed
    this.yspeed += map(this.z, 0, 20, 0.01, 0.2)
    if (this.y > height) {
      this.y = random(-200, -100)
      this.yspeed = this.startSpeed()
    }
  }

  show() {
    strokeWeight(map(this.z, 0, 20, 1, 3))
    stroke(138, 43, 226)
    line(this.x, this.y, this.x, this.y + this.len)
  }
}
