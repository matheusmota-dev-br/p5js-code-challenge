class Planet {
  constructor(radius, distance, orbitSpeed) {
    this.radius = radius
    this.position = p5.Vector.random3D().mult(distance)
    this.angle = random(TWO_PI)
    this.orbitSpeed = orbitSpeed
    this.moons = []
  }

  orbit() {
    this.angle += this.orbitSpeed
    this.moons.forEach((moon) => moon.orbit())
  }

  spawnMoons(total, level) {
    for (let i = 0; i < total; i++) {
      const radius = this.radius / (level * 2)
      const distance = random(
        this.radius + radius,
        (this.radius + radius) * 2
      )
      const moon = new Planet(radius, distance, random(-0.1, 0.1))
      this.moons.push(moon)

      if (level < 2) {
        moon.spawnMoons(int(random(0, 3)), level + 1)
      }
    }
  }

  show() {
    push()
    noStroke()
    fill(255)

    const axis = this.position.cross(createVector(1, 0, 1))
    if (axis.x !== 0 || axis.y !== 0 || axis.z !== 0) {
      rotate(this.angle, axis)
    }
    translate(this.position.x, this.position.y, this.position.z)
    sphere(this.radius)

    this.moons.forEach((moon) => moon.show())
    pop()
  }
}
