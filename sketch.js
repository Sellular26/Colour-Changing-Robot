var head, headImg, leg, legImg, body, hand, leg2, legImg2;

function preload() {
  headImg = loadImage('ball.png');
  legImg=loadImage('paddle.png');
  legImg2 = loadImage('paddle.png')
}
function setup() {
  createCanvas(400, 400); 
  head = createSprite(200, 100);
  head.addImage("head", headImg);
  body = createSprite(200, 170, 50, 100);
  hand = createSprite(200, 150, 100, 10);
  leg = createSprite(170, 250);
  leg.addImage("leg", legImg);
  leg2 = createSprite(200, 250);
  leg2.addImage("leg2", legImg2);
}

function draw() {
  background(205,153,0);
  
  head.x = mouseX;
  body.x = mouseX;
  hand.x = mouseX;
  leg.x = mouseX - 20;
  leg2.x = mouseX + 20;
  
  if (keyDown("space")){
    
    if (frameCount%3 == 0){
      hand.shapeColor = "red";
      body.shapeColor = "red";
    }
    
    if (frameCount%6 == 0){
      hand.shapeColor = "blue";
      body.shapeColor = "blue";
    }
    
    if (frameCount%9 == 0){
      hand.shapeColor = "green";
      body.shapeColor = "green";
    }
  }
  
  if (keyDown("right")){
    
    if (frameCount%3 == 0){
      hand.shapeColor = "yellow";
      body.shapeColor = "yellow";
    }
    
    if (frameCount%6 == 0){
      hand.shapeColor = "purple";
      body.shapeColor = "purple";
    }
    
    if (frameCount%9 == 0){
      hand.shapeColor = "orange";
      body.shapeColor = "orange";
    }
  }
  
  drawSprites();
  
  if (frameCount>50&&frameCount<100){
    fill ("white")
    textSize(50);
    text("Hold SPACE", 50, 200);
  }
  if (frameCount>150&&frameCount<200){
    fill("white");
    textSize(20);
    text("Change colour combo by holding RIGHT", 25, 200)
  }
}

