var box
function setup() {
  createCanvas(1000,1000);
  box=createSprite(50,50,50,50)
  box.shapeColor=("red")
  
}

function draw() 
{
  background("blue")
if(keyDown(UP_ARROW)){
  box.position.y-=9

}
if(keyDown(DOWN_ARROW)){
  box.position.y+=9
}
if(keyDown(LEFT_ARROW)){
  box.position.x-=9
}
if(keyDown(RIGHT_ARROW)){
  box.position.x+=9
}
drawSprites()
}




