let a = null
let sponge = []

function mousePressed(){
    let next = []
    sponge.map((b) => {
        let newBoxes = b.generate()
        next = next.concat(newBoxes)
    })
    
    sponge = next
}

function setup(){
    createCanvas(400, 400, WEBGL)
    let b = new Box(0,0,0, 200)
    sponge.push(b)
    a = 0
}

function draw(){
    background(51)
    stroke(255)
    noFill()
    lights()

    translate(0, 0)
    rotateX(a)
    rotateY(a * 0.4)
    rotateZ(a * 0.1)

    sponge.map((b) => {
        b.show()
    })

    a += 0.01
}