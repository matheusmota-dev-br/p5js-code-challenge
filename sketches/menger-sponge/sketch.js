// Each level multiplies the box count by 20, so level 4 (160,000 boxes)
// would freeze the tab. Clicking past the last level starts over.
const MAX_DEPTH = 3

let angle = 0
let depth = 0
let sponge = []
// All the boxes merged into one mesh, drawn in a single call.
let mesh = null

function setup() {
  const canvas = createCanvas(400, 400, WEBGL)
  canvas.mousePressed(subdivide)
  reset()
}

function reset() {
  depth = 0
  sponge = [new Box(0, 0, 0, 200)]
  rebuildMesh()
}

function rebuildMesh() {
  if (mesh) {
    freeGeometry(mesh)
  }
  mesh = buildGeometry(() => sponge.forEach((box) => box.show()))
}

function subdivide() {
  if (depth === MAX_DEPTH) {
    reset()
    return
  }
  sponge = sponge.flatMap((box) => box.generate())
  depth++
  rebuildMesh()
}

function draw() {
  background(51)
  lights()

  rotateX(angle)
  rotateY(angle * 0.4)
  rotateZ(angle * 0.1)

  noStroke()
  fill(255)
  model(mesh)

  angle += 0.01
}
