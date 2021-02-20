
function isTouch(object1,obejct2){
  
  if(object1.x-obejct2.x < obejct2.width/2+object1.width/2  &&
    obejct2.x-object1.x < obejct2.width/2+object1.width/2 &&
    object1.y-obejct2.y < obejct2.height/2+object1.height/2  &&
    obejct2.y-object1.y < obejct2.height/2+object1.height/2   ){

   return true;
   
  }
  else{
   return false;//boolean
  }
}


function bounce(rect1,rect2){

  if(rect1.x-rect2.x < rect1.width/2+rect2.width/2  &&
    rect2.x-rect1.x < rect1.width/2+rect2.width/2 ){
     
      rect1.velocityX = rect1.velocityX *(-1);
      rect2.velocityX =  rect2.velocityX *(-1); }


      if(rect1.x-rect2.y< rect1.height/2+rect2.height/2  &&
        rect2.x-rect1.y< rect1.height/2+rect2.height/2 ){
         
          rect1.velocityY = rect1.velocityY *(-1);
          rect2.velocityY =  rect2.velocityY *(-1); }
    
    
    






    }

