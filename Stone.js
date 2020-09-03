class Stone {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(241, 431, 40, options);
        this.radius = 80;
        //this.body.position.x = 50;
        //this.body.position.y = 500;
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}