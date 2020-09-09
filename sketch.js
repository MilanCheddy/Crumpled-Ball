const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBody, ball;
var bottom, leftSide, rightSide;
var ground;
var body, position;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(180,240,70);

	bottom=createSprite(600,690,200,20);
	bottom.shapeColor="white";
	leftSide=createSprite(500,670,20,200);
	leftSide.shapeColor="white";
	rightSide=createSprite(700,670,20,200); 
	rightSide.shapeColor="white";

	ground = new Ground(600,700,1200,20)

	paperBody = Bodies.circle(200, 200, 200);
	paperBody.shapeColor="green";
	World.add(world, paperBody); 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Body.applyForce(ball.body,ball.body.position,{x:115,y:-225});

		
	}
}

