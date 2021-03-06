var paperIMG, paperSprite, dustbingreenSprite,dustbingreenIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperIMG=loadImage("paper.png")
	dustbingreenIMG=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	paperSprite=createSprite(850, 80, 10,10);
	paperSprite.shapeColor=color("white");
	paperSprite.addImage(paperIMG)
	paperSprite.scale=0.8

	dustbingreenSprite=createSprite(width-200,height-150,200,20);
	dustbingreenSprite.addImage(dustbingreenIMG)
	dustbingreenSprite.scale=0.7

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
	var options={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paperObject=Bodies.circle(100,100,40,options)
	World.add(world, paperObject);
   var rect_options={
	   isStatic:true
   }
	LowerRect=Bodies.rectangle(width-200,height-50,200,20,rect_options)
	World.add(world, LowerRect);
	leftRect=Bodies.rectangle(width-300,height-100,20,100,rect_options)
	World.add(world, leftRect);
	rightRect=Bodies.rectangle(width-100,height-100,20,100,rect_options)
	World.add(world, rightRect);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(100);
 paperSprite.x= paperObject.position.x 
 paperSprite.y= paperObject.position.y
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject,paperObject.position,{x:450,y:-400});
	}
}



