
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
 var g1, g2, g3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50, 150, 15, {restitution:0.3}, {density:1.2});
	World.add(world, ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	g1=new Ground(600, 490, 1200, 20);
	g2=new Ground(1100, 475, 20, 99);
	g3=new Ground(1150, 475, 20, 99);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  g1.show();
  g2.show();
  g3.show();
  ellipse(ball.position.x, ball.position.y, 15);

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0.04});
    }
}

