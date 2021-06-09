var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
   
var snow = [];
var bg,cloud1,cloud2;
function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  bg = loadImage("back.jpg")
cloud1=new Clouds(200,-30)
cloud2=new Clouds(600,-30)
}

function draw() {
  Engine.update(engine);
  background(bg);  
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }
  if(frameCount%15===0){
    snow.push(new Balls(random(5,795),10,10))
  }
  cloud1.display();
  cloud2.display();
}