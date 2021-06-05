const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

var engine, world;

function setup() {
  createCanvas(480,800);

  ground1 = new Ground(400,690,800,20);
  
  for(var k=0;k<=width;k=k+80) {
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,270))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  Engine.run(engine);
}


function draw() {
  background("black");  

 if(freameCount%60===0){
   particles.push(new particles(random(width/2-10,width/2+10),10,10));
 }

  for(var p=0;j<particles.length;p++){
  particles[p].display();
}

for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}

for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}

  ground1.display();

  drawSprites();
};