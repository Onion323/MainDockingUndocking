var iss, spacebg, sp1, sp2, sp3, sp4;
var hasDocked = false;
var iss1, spacecraft;

function preload(){
  iss = loadImage("images/iss.png")
  spacebg = loadImage("images/spacebg.jpg")
  sp1 = loadImage("images/spacecraft1.png")
  sp2 = loadImage("images/spacecraft2.png")
  sp3 = loadImage("images/spacecraft3.png")
  sp4 = loadImage("images/spacecraft4.png")
}


function setup() {
  createCanvas(600,350);
  iss1 = createSprite(330, 130);
  iss1.addImage(iss);
  iss1.scale = 0.25;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(sp1);
  spacecraft.scale = 0.15;
  
}

function draw() {
  background(spacebg);
  spacecraft.addImage(sp1);  
  if (!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 2;    
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(sp2)
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(sp4)
      spacecraft.x = spacecraft.x - 1;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(sp3)
      spacecraft.x = spacecraft.x + 1;
    }
  }
  if (spacecraft.y <=(iss.y+70) && spacecraft.x <=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200, 300);
  }

  drawSprites();
}