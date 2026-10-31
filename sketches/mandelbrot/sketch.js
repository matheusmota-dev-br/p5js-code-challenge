const MAX_ITERATIONS = 100
const ESCAPE_RADIUS_SQUARED = 16

function setup() {
  createCanvas(640, 640)
  pixelDensity(1)
  // The image never changes, so it only needs to be computed once.
  noLoop()
}

function draw() {
  loadPixels()
  for (let px = 0; px < width; px++) {
    for (let py = 0; py < height; py++) {
      const ca = map(px, 0, width, -2.2, 0.8)
      const cb = map(py, 0, height, -1.5, 1.5)
      const n = iterations(ca, cb)

      const brightness =
        n === MAX_ITERATIONS ? 0 : sqrt(n / MAX_ITERATIONS) * 255

      const offset = (px + py * width) * 4
      pixels[offset] = brightness
      pixels[offset + 1] = brightness
      pixels[offset + 2] = brightness
      pixels[offset + 3] = 255
    }
  }
  updatePixels()
}

function iterations(ca, cb) {
  let a = ca
  let b = cb
  for (let n = 0; n < MAX_ITERATIONS; n++) {
    const nextA = a * a - b * b + ca
    b = 2 * a * b + cb
    a = nextA
    if (a * a + b * b > ESCAPE_RADIUS_SQUARED) {
      return n
    }
  }
  return MAX_ITERATIONS
}
