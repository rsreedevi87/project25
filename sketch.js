const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;
var ground;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,660,width,20);
	paper = new Paper(200,450,70);
	box1 = new Box(1200,640);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
 
  paper.display();
  ground.display();
  box1.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-305});
	}
  }