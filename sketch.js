var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

for(k = 0; k <= innerWidth; k = k + 80){
divisions.push(newDivisions(k,height-divisionHeight/2,10,divisionHeight))
}

for(var j = 40 ; j <= width; j = j + 50){
  plinkos.push(newplinko(j,75));
}
for(var j = 15 ; j <= width-15; j = j + 50){
  plinkos.push(newplinko(j,175));
}

for(var j = 0 ; j < particles.length; j++){
  particles[j].display();
}
for(var k = 0 ; k < particles.length; k++){
  display[k].display();
}

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}