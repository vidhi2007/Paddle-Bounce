var ball,paddle, ballImage, paddleImage;
function preload() {
  
  ballImage=loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
                    
}
function setup() {
  createCanvas(400, 400);
   
  ball=createSprite(150,200,10,10);
  ball.addImage("ball", ballImage);
  paddle=createSprite(350,200,10,10);
  paddle.addImage("paddle", paddleImage);             
   
ball.velocityX=9
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
ball.bounceOff(paddle);
  paddle.bounceOff(edges);
 ball.bounceOff(edges[0])
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY=-6;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=6
  }
  drawSprites();
  
}

function randomVelocity()
{
  
if(ball.isTouching(paddle)){
  ball.velocityY=Math.round(random(1,10))
}
  
 ball.bounceOff(paddle, callback) 
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

