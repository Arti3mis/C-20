var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 20, 20);
  a.shapeColor="red";
 
  b=createSprite(250,300,20,20);
  b.shapeColor="green";
}

function draw() {
  background(255,255,255);
  a.x=World.mouseX;
  a.y=World.mouseY;
  
  console.log(a.x-b.x);

  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2&&b.y-a.y<a.height/2+b.height/2){
    b.shapeColor="red"
  }
  else{
    b.shapeColor="green"
  }
  
  drawSprites();
}