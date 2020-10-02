var bananaImage, obstacleImage, obstacle, group, background, score, player_running

function preload() {
  background = loadimage("jungle.jpg")
  player_running = setAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  
  
  bananaImage = loadimage("banana.png")
  obstacleImage = loadimage("stone.png")
}

function setup() {
  createCanvas(400, 400);
  
  background
  
}

function draw() {
  background(220);
  
  drawSprites();
}