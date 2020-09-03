class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        World.add(world, this.body);
        this.image = loadImage("mango.png");
    }
    display() {
        var pos = this.body.position;
        push();
        image(this.image, pos.x, pos.y, 50, 50);
        pop();
    }
}