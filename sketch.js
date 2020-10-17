
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,60,60) 
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1 
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x=ground.width/2;
  
  //console.log(ground.x)

  foodGroup = createGroup();
  score = 0;
}
 

function draw() {
  background(255);
  
  if(ground.x<0){
     ground.x = ground.width/2
     }
  if(keyDown("space")&& monkey.y>=200){
     monkey.velocityY = -12
     }
  monkey.velocityY = monkey.velocityY + 0.8;
  console.log(monkey.y)
  monkey.collide(ground) 
  stroke("white")
  textSize(20)
  fill("white")
  text("score "+score,300,50)
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survival time: "+survivaltime,100,50)
  food();
  obstacles();
  drawSprites();
}
function food(){
  if(frameCount%80===0){
  banana = createSprite(400,200,1,1)
  banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage)
  banana.velocityX=-2
  banana.scale = 0.1  
  banana.lifetime = 200
  foodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300 === 0){
     obstacle = createSprite(400,310,1,1)
     obstacle.addImage(obstacleImage)
     obstacle.velocityX = -2
     obstacle.lifetime = 200 
     obstacle.scale = 0.3 
  }
}




