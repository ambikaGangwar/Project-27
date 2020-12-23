
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var engine, world;
var roof,rope1,bob1,bob2,bob3,bob4,bob5;
 

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;



    Engine.run(engine);
   bob1=new Bob(300,350,10)
   bob2 = new Bob(350,350,10)
   bob3 = new Bob(400,350,10)
   bob4 = new Bob(450,350,10)
   bob5 = new Bob(500,350,10)
   roof = new Roof(400,200,380,15)
   rope1 = new Rope(300,400,50,5)
}


function draw(){
    rectMode(CENTER);
    background(238,232,170);
    text(mouseX+","+mouseY,mouseX,mouseY);
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
  roof.display();
  rope1.display();

    drawSprites();
 
}