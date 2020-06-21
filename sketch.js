var car,wall;

var speed,weight;


function setup() {
  createCanvas(400,1600);
  car=createSprite(400, 200, 50, 50);
  wall=createSprite(1500,200,50,height/21);
  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed;

}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
  

  if(deformation>180){
    car.shapeColor="red";

  }

    
  if(deformation<180 && deformation>100){
     car.shapeColor="yellow";

  }

  if(deformation<100){
    car.shapeColor="green";

  }
  
}
  drawSprites();
}