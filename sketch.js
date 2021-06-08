

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, ground2, ground3, ground4;
var paper;
var rect1, rect2, rect3;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,700,1200,50);
	ground2 = new Ground(10,354,50,640);
	ground3 = new Ground(1190,354,50,640);
	ground4 = new Ground(600,10,1200,50);
	rect1 = new Dustbin(960, 625, 15, 150);
	rect2 = new Dustbin(890, 670, 150, 15);
	rect3 = new Dustbin(820, 625, 15, 150);

	paper = new Paper(100,300,40);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  
 
}

function keyPressed() {
	if (keyCode === 38) {
		
		Matter.Body.applyForce(paper.body,paper.body.position, { x: 25, y: -25 });		
	}
}




