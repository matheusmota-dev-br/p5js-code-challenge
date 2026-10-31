const DROP_COUNT = 500

let drops = []

function setup() {
  createCanvas(640, 360)
  for (let i = 0; i < DROP_COUNT; i++) {
    drops.push(new Drop())
  }
}

function draw() {
  background(230, 230, 250)

  drops.forEach((drop) => {
    drop.fall()
    drop.show()
  })
}
