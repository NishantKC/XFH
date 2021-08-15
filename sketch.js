function preload(){
  playerimg = loadImage("sdgs/player.png")
  ship1= loadImage("sdgs/spaceship2.png")
  ship2= loadImage("sdgs/spaceship3.png")

}

function setup() {
  createCanvas(600,650);
  player = createSprite(300, 550, 50, 50)
  player.addImage(playerimg)
  player.scale=0.3
  edges=createEdgeSprites()
  enemygroup=createGroup()
  bulletgroup=createGroup()
}

function draw() {
  background(0,0,0);
  player.velocityX=0 
  player.debug=true
  player.setCollider("rectangle",0,0,320,400)
   if(keyDown("left")){
     player.velocityX = -10
   }
   if(keyDown("right")){
    player.velocityX = 10
  }
  player.collide(edges)
  spaceships()
  if(keyDown("space")&& frameCount%5 ===0){
    bullet=createSprite(player.x,player.y,10,10)
    bullet.velocityY=-10
    bulletgroup.add(bullet)
  }
 for (var i = 0;i <enemygroup.length;i++){
    if(bulletgroup.isTouching(enemygroup.get(i))){
      enemygroup.get(i).destroy()
      bulletgroup.destroyEach()
    }
  }

    
  drawSprites();
}

function spaceships (){
if(frameCount%80===0){
  spaceship=createSprite(random(50,550),-20,50,50)
  spaceship.velocityY=6
  spaceship.rotation=180
  
  switch(Math.round(random(1,2))){
    case 1: spaceship.addImage(ship1)
    spaceship.scale = 0.6
    break;
    case 2: spaceship.addImage(ship2)
    spaceship.scale = 0.3
    break
  }
  spaceship.lifetime=200
  enemygroup.add(spaceship)
}
}