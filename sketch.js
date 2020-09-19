
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBody;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paperBody = new Paper(100,200,20);
	ground = new Ground(600,height,1200,20);
	dustbin1 = new Ground(620,height,150,40)
	dustbin2 = new Ground(550,height,40,150)
	dustbin3 = new Ground(700,height,40,150)
	





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBody.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x: 60, y: -60});
}
}



