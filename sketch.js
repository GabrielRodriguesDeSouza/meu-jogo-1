var canvas;
var backgroundImage;
var bgImg;

var form, player,game;
var gameState;

var romeu
var racao
var blocos
var blocoImage1,blocoImage2,blocoImage3
var romeuImg
var racaoImg


function preload() {
  backgroundImage = loadImage("./assets/asdasd.png");
  blocoImage2 = loadImage("./assets/bloco.png.png")
  romeuImg = loadImage("./assets/romeu.png")
  racaoImg = loadImage("./assets/food.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  //game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  game.play()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
