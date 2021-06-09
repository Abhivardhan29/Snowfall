class Clouds {
    constructor(x, y) {
        var options = {
            isStatic:true
    
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("cloud.png")

        Matter.World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.image, 0, 0);
        
        pop();
    }

};