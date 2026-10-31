let drops = []

function createDrops(n){
    let drops = []
    for(let i = 0; i < n ; i++ ){
        d = new Drop()
        drops.push(d)
    }
    return drops
}

function setup(){
    createCanvas(640, 360)
    drops = createDrops(500)
}

function draw(){
    background(230, 230, 250)

    drops.map((d) => {
        d.fall()
        d.show()
    })
}