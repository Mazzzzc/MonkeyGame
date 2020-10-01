
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.VelocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  
  background(20000);
  
  if(keyDown("space")&& monkey.y >= 310) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,50);
  
  drawSprites();
}

function food(){
  
  if (frameCount % 80 === 0){
    var banana = createSprite(200,Math.round(random(170,290)),40,40);
    banana.addImage("food",bananaImage);
    
    banana.VelocityX=-4;
    
    banana.lifetime=150;
    
    banana.scale=0.1;
    
    foodGroup.add(banana);
  }
}

function obstacles(){
  
  if (frameCount % 300 === 0){
    var obstacle = createSprite(200,330,10,40);
    obstacle.addImage("rock",obstacleImage);
    
    obstacle.velocityX =-4;
    
    obstacle.scale=0.1;
    
    obstacle.lifetime=150; 
    
    obstacleGroup.add(obstacle);
  } 
}






