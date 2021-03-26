
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var tree1, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Tree(700,600,30,100);
	//tree1 = new Tree(700,600,30,100);

	//Create the Bodies Here.
	//ground = new Ground(400,700,800,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  //ground.display();

  drawSprites();
 
}



