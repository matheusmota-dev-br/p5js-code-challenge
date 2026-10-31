let stars = null
let speed = null

function createStars(n){
    stars = []
    for(let i = 0; i < n; i++){
        stars.push(new Star())
    }
    return stars
}

function setup(){
    createCanvas(500, 500)

    stars = createStars(1000)
}

function draw(){
    speed = map(mouseX, 0, width, 0, 50)
    background(0)
    translate(width/2, height/2)
    for(let i = 0; i < stars.length; i++){
        stars[i].update()
        stars[i].show()
    }
}