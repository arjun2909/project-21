
var bullet,wall,thickness;
var speed, weight; 
function setup() {
  createCanvas(1600, 400);
	speed=random(55,90)
	weight=random(400,1500)

	bullet=createSprite(50, 200, 50,5);   
	bullet.velocityX = speed;
	bullet.shapeColor=color("white");
	wall=createSprite(1500,200, thickness,height/2);
	  wall.shapeColor=color(80,80,80)
	  thickness=random(22,83);

}
console.log (thickness);
function draw() {
  background(0);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180){
		bullet.shapeColor=color(255,0,0);}
	if(deformation<180 && deformation>100){
		wall.shapeColor=("red");
	}
	if(deformation<100){
		wall.shapeColor=("green");
	}
  }
  
wall.display();
bullet.display();

}
console.log(thickness);

