var x1 = 0;
var y1 = 0;
var speed = 5;
var sphereSize = 50;
var sphereLoc = 0;
var isPlaying = false;
let customFont;
var sphereColor = 255;
function preload() {
  customFont = loadFont("october-crow.regular.ttf");

  bg = loadImage("brightbg.png");
  dark = loadImage("shadow.png");
  spritesheet = loadImage("DecemberSprite.png");
  song = loadSound("radiohead.mp3");
  windowImg = loadImage("New Piskel-1.png.png");
}
function setup() {
  createCanvas(960, 540, WEBGL);
  imageMode(CENTER);
}

function draw() {
  handleMovement();
  tint(255, 255);
  background(220);
  image(bg, 0, 0, 960, 540);
  tint(225, 225);
  image(spritesheet, x1, y1, 200, 200);
  tint(255, 210);
  image(dark, 0, 0, 960, 540);
  isNearDoll();
  windowLook();
}

function handleMovement() {
  let moving = false;
  // parameters for x movement
  if (x1 >= 400) {
    speed = 0;
    x1 = 399;
  } else {
    speed = 5;
  }
  if (x1 <= -400) {
    speed = 0;
    x1 = -399;
  } else {
    speed = 5;
  }
  // parameters for y movement
  if (y1 >= 200) {
    speed = 0;
    y1 = 199;
  } else {
    speed = 5;
  }
  if (y1 <= -200) {
    speed = 0;
    y1 = -199;
  } else {
    speed = 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y1 += speed;
  } else if (keyIsDown(LEFT_ARROW)) {
    x1 -= speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x1 += speed;
  } else if (keyIsDown(UP_ARROW)) {
    y1 -= speed;
  }
}
function isNearDoll() {
  if (x1 <= -100 && y1 <= -100) {
    fill(255);
    textSize(25);
    textFont(customFont);
    text("It's my stuffed rabbit, I have had it since I was small.", -350, 200);
  }
}
function windowLook() {
  if (x1 >= 100 && y1 <= -100) {
    tint(255, 300);
    image(windowImg, 0, 0, 960, 540);
    textFont(customFont);
    textSize(75);
    text("It's spherey, the sphere!!!", -350, 200);

    rotateWithFrameCount();
    color(sphereColor);
    sphere(sphereSize);
  }
}
function rotateWithFrameCount() {
  rotateY(frameCount / 100);
  rotateX(frameCount / 100);
  rotateZ(frameCount / 100);
}
function playingMusic(){
  song.setLoop(true);
  song.play();
  song.setVolume(1.0);
}
function mousePressed() {
  if (isPlaying == false) {
    playingMusic();
    isPlaying = true;
  }
}
