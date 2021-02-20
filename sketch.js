

var fixedRect,movingRect,fixedRect1,fixedRect2;
var rect1,rect2;



function setup() {
createCanvas(800,800)



fixedRect1=createSprite(650,400,40,40)
fixedRect1.shapeColor="green"

fixedRect2=createSprite(150,400,40,40);
fixedRect2.shapeColor="green";

fixedRect=createSprite(400,400,100,40);
 fixedRect.shapeColor="green" 

movingRect=createSprite(600,400,40,150);
movingRect.shapeColor="green"

mrect1=createSprite(100,600,40,40);
mrect1.shapeColor="green"
mrect1.velocityX=2;

mrect2=createSprite(700,600,40,40);
mrect2.shapeColor="purple"
mrect2.velocityX=-2;


}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 // console.log(fixedRect.x-movingRect.x);

 fixedRect.shapeColor ="green";
 movingRect.shapeColor = "green";
 fixedRect1.shapeColor ="green";
 fixedRect2.shapeColor ="green";

 if(isTouch(fixedRect,movingRect)){
   fixedRect.shapeColor ="red";
   movingRect.shapeColor = "red";

 }
 if(isTouch(fixedRect1,movingRect)){
  fixedRect1.shapeColor ="red";
  movingRect.shapeColor = "red";

}
if(isTouch(fixedRect2,movingRect)){
  fixedRect2.shapeColor ="red";
  movingRect.shapeColor = "red";



}

  bounce(mrect1,mrect2);



  drawSprites();
}






































