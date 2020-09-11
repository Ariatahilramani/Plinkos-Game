
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground=new Ground(400,600,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  ground.display();
  
  for(var j=0;j=particles.length;j++){
          particles[j].display();
	  }
	  
	  for(var k=0;j=divisions.length;k++){
		divisions[k].display();
	}
 
	for(var j=0;j=plinkos.length;j++){
		plinkos[j].display();
	}
 
}



