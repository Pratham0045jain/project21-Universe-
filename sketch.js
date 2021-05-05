
var width1 = 10;
var height1 = 10;
var angle = 0;

var x = 200;
var y = 200;

var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;

var sunImg;
var mercuryImg;
var venusImg;
var earthImg;
var marsImg;
var jupiterImg;
var saturnImg;
var uranusImg;
var neptuneImg;


function preload() {
  sunImg = loadImage("Sprites/Sun.png");
  mercuryImg = loadImage("Sprites/mercury.png")
  venusImg = loadImage("Sprites/venus.png")
  earthImg = loadImage("Sprites/earth.png")
  marsImg = loadImage("Sprites/mars.png")
  jupiterImg = loadImage("Sprites/jupiter.png")
  saturnImg = loadImage("Sprites/saturn.png")
  uranusImg = loadImage("Sprites/uranus.png")
  neptuneImg = loadImage("Sprites/neptune.png")
}

function setup() {
  createCanvas(2700, 2700);

  sun = createSprite(0, 0);
  mercury = createSprite(200, 200, 10, 10);
  venus = createSprite(100, 310, 10, 10);
  earth = createSprite(500, 200, 10, 10);
  mars = createSprite(200, 500, 10, 10);
  jupiter = createSprite(-600, 600, 10, 10);
  saturn = createSprite(900, 600, 10, 10);
  uranus = createSprite(200, 1050, 10, 10);
  neptune = createSprite(600, 1120, 10, 10);


  sun.addImage(sunImg);
  mercury.addImage(mercuryImg);
  venus.addImage(venusImg);
  earth.addImage(earthImg);
  mars.addImage(marsImg);
  jupiter.addImage(jupiterImg);
  saturn.addImage(saturnImg);
  uranus.addImage(uranusImg);
  neptune.addImage(neptuneImg);

  mercury.scale = 0.09;
  venus.scale = 0.25;
  earth.scale = 0.15;
  mars.scale = 0.15;
  jupiter.scale = 1.3;
  saturn.scale = 0.5;
  uranus.scale = 0.35;
  neptune.scale = 0.8;


  sun.setCollider("circle", 0, 0, 200)

  sun.debug = true

}

function draw() {
  background("black");

  if (sun.isTouching(mercury)) {
    mercury.destroy();
  }

  if (sun.isTouching(venus)){
    venus.destroy();
  }

  if (sun.isTouching(earth)){
    earth.destroy();
  }

  if (sun.isTouching(mars)){
    mars.destroy();
  }

  if (sun.isTouching(jupiter)){
    jupiter.destroy();
  }

  if (sun.isTouching(saturn)){
    saturn.destroy();
  }

  if (sun.isTouching(uranus)){
    uranus.destroy();
  }

  if (sun.isTouching(neptune)){
    neptune.destroy();
  }

  if (frameCount % 10 === 0) {
    /*  width1 = width1 + 1;
     height1 = height1 + 1; */
    sun.scale += 0.01;
  }


  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.5;


  drawSprites();
}