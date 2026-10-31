let snake
let rez = 20
let food
let w
let h

function setup(){
    createCanvas(400, 400)
    w = floor(width/rez)
    h = floor(height/rez)
    frameRate(5)
    snake = new Snake()
    foodLocation()
}

function foodLocation(){
    let x = floor(random(w))
    let y = floor(random(h))
    food = createVector(x,y)
}

function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            snake.setDir(-1, 0)
            break    
        case RIGHT_ARROW: 
            snake.setDir(1, 0)
            break
        case DOWN_ARROW:
            snake.setDir(0, 1)
            break
        case UP_ARROW: 
            snake.setDir(0, -1)
            break
    }
}

function mousePressed(){
    snake.grow()
}

function draw(){
    scale(rez)
    background(220)
    
    if(snake.eat(food)){
        foodLocation()
    }
    snake.update()  
    snake.show()

    if(snake.endGame()){
        print("END GAME")
        background(255, 0, 0)
        noLoop()
    }
    noStroke()
    fill(255, 0, 0)
    rect(food.x, food.y,1, 1)
}