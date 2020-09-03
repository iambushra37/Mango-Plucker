
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;
function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	tree = new Tree();
	ground = new Ground(800, height, 1600, 20);
	stone = new Stone();
	mango1 = new Mango(950, 150);
	mango2 = new Mango(1150, 200);
	mango3 = new Mango(1200, 200);
	mango4 = new Mango(900, 100);
	mango5 = new Mango(800, 300);
	launcher = new Launcher(stone.body, { x: 241, y: 431 });
}


function draw() {
	Engine.update(engine);
	background(0);
	imageMode(CENTER);
	image(boy, 400, 550, 500, 500);
	tree.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);

}
function mouseDragged() {
	Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	launcher.fly();
}
function keyPressed() {
	if (keyCode === 32) {
		launcher.attach(stone.body);
		Body.setPosition(stone.body, { x: 241, y: 431 });
	}
}

function detectCollision(lstone, lmango) {

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log("he disatnce is:" + distance);
	if (distance <= lmango.radius + lstone.radius) {

		Body.setStatic(lmango.body, false);
	}

}