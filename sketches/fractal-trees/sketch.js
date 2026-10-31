let angle
let slider

function setup(){
    createCanvas(400, 400)
    angle = 0
    slider = createSlider(0, TWO_PI, PI/4, 0.01)
}
function draw(){
    background(51)

    angle = slider.value()
    
    translate(200, height)
    stroke(255)
    branch(100)
}

function node(_angle, len){
    push()
    rotate(_angle)
    branch(len * 2.0/3.0)
    pop()
}

function branch(len){
    line(0, 0, 0,-len)
    translate(0, -len)
    if(len > 4){
        node(angle, len)
        node(-angle, len)
    }
}