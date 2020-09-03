class Tree {
    constructor() {
        var options = {
            isStatic: true,
            density: 0.1
        }
        this.body = Bodies.rectangle(1000, 370, 100, 100, options)
        this.width = 700;
        this.height = 700;
        World.add(world, this.body);
        this.image = loadImage("tree.png");
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}