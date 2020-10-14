const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var displayHeight = 300;

var ground;





function setup() {
  createCanvas(800,800);
  ground = new Ground(width/2,height,width,20);

  for(var k = 0 ;k <=innerWidth;k = k+80){
    divisions.push(new Divisions(k,height-displayHeight/2,10,displayHeight));
  }

  for(var j = 40; j<=width;j=j+50 )
  {
    plinkos.push(new Plinkos(j,75,10));
  }

  for (var j = 15; j <=width-10;j=j+50)
  {
    plinkos.push(new Plinkos(j,175,10));
  }
 
  for(var j = 40; j<=width;j=j+50 )
  {
    plinkos.push(new Plinkos(j,275,10));
  }

  for (var j = 15; j <=width-10;j=j+50)
  {
    plinkos.push(new Plinkos(j,375,10));
  }

}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display();
  
  for(var i = 0;i<plinkos.length;i++){
    plinkos [i].display();
  }

  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0;j<particles.length;j++){
    particle [j].display();
  }

  for(var k = 0;k<particles.length;k++){
    particle [k].display();
  }



}