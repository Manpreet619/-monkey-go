var monkey , monkey_running
var banana ,bananaImage, bananaGroup
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey = createSprite(80,315,20,20);
monkey.addAnimation ("moving", monkey_running);
monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false;
  
 
}


function draw() {
background(1000,170,100);
console.log (monkey.y)  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
    
  }
  if (keyDown("space") ){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
 
  stroke("white");
  textSize(20);
  fill("white");
  text("SurvivalTime: "+ survivalTime, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text ("Survival Time: "+ survivalTime, 100,50);
  createEdgeSprites();
  drawSprites();
  
}
function food(){
if (frameCount%80===0) {
  banana=createSprite(400,Math.round(random(120,200)),10,10)
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.scale = 0.07;
}
}
function obstacles(){
if (frameCount%300===0) {
  obstacle=createSprite(400,330,10,10)
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.lifetime=100 ;
  obstacle.scale = 0.07;
  

}
}
