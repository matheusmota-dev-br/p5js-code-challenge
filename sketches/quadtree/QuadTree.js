class QuadTree {
  constructor(boundary, capacity) {
    this.boundary = boundary
    this.capacity = capacity
    this.points = []
    this.children = null
  }

  subdivide() {
    const { x, y } = this.boundary
    const w = this.boundary.w / 2
    const h = this.boundary.h / 2

    this.children = [
      new Rectangle(x + w, y - h, w, h),
      new Rectangle(x - w, y - h, w, h),
      new Rectangle(x + w, y + h, w, h),
      new Rectangle(x - w, y + h, w, h),
    ].map((rectangle) => new QuadTree(rectangle, this.capacity))
  }

  insert(point) {
    if (!this.boundary.contains(point)) {
      return false
    }

    if (this.points.length < this.capacity) {
      this.points.push(point)
      return true
    }

    if (!this.children) {
      this.subdivide()
    }
    return this.children.some((child) => child.insert(point))
  }

  query(range, found = []) {
    if (!this.boundary.intersects(range)) {
      return found
    }

    for (const point of this.points) {
      if (range.contains(point)) {
        found.push(point)
      }
    }
    if (this.children) {
      this.children.forEach((child) => child.query(range, found))
    }
    return found
  }

  show() {
    stroke(255)
    noFill()
    strokeWeight(1)
    rectMode(CENTER)
    rect(
      this.boundary.x,
      this.boundary.y,
      this.boundary.w * 2,
      this.boundary.h * 2
    )

    strokeWeight(2)
    for (const p of this.points) {
      point(p.x, p.y)
    }

    if (this.children) {
      this.children.forEach((child) => child.show())
    }
  }
}
