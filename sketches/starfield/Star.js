class Star {
    x = null
    y = null
    z = null
    pz = null
    constructor(){
        this.x = random(-width, width)
        this.y = random(-height, height)
        this.z = random(width)
        this.pz = this.z
    }

    update(){
        this.z = this.z - speed
        if(this.z < 1){
            this.x = random(-width, width)
            this.y = random(-height, height)
            this.z = width
        }
    }

    show(){
        fill(255)
        noStroke()

        let sx = map(this.x/this.z, 0, 1, 0, width)
        let sy = map(this.y/this.z, 0, 1, 0, height)

        let r = map(this.z, 0, width, 16, 0)

        let px = map(this.x/this.pz, 0, 1, 0, width)
        let py = map(this.y/this.pz, 0, 1, 0, height)

        this.pz = this.z 
        stroke(255)
        line(px, py, sx, sy)

    }
}