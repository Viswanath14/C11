
var trex ,trex_running;
var ground,groundimage;
function preload()
{
   trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")    
   groundimage = loadImage("ground2.png")
}


function setup(){
  createCanvas(600,200)
   trex = createSprite(50,157,20,50)
   trex.addAnimation("running",trex_running)
   trex.scale = 0.8
   ground = createSprite(300,195,600,10)
   ground.addAnimation("groundimage",groundimage)
   
   
}

function draw(){
  background("white")
  drawSprites()
  if (keyDown("space"))
  {
    trex.velocityY =-8
  }
  trex.velocityY = trex.velocityY+0.8
  trex.collide(ground)
}

