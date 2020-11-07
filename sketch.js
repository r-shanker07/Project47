
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var foodGroup
var time = 0
var bgIMG

function preload()
{
	bgIMG = loadImage("images/background.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = new Player(400,350,30,30)

	foodGroup = new Group();

	Engine.run(engine);
  
}


function draw() {
	background(bgIMG)
  rectMode(CENTER);
  background("green");
  fill("white")
  text("Score: "+ score, 500,50);
  time = time + Math.round(World.frameRate/10);

  if(keyDown(UP_ARROW)){
	player.y = player.y -3
	}
	if(keyDown(DOWN_ARROW)){
	player.y = player.y +3
	}
	if(keyDown(LEFT_ARROW)){
	player.x = player.x -3
	}
	if(keyDown(RIGHT_ARROW)){
	player.x = player.x -3
	}

	if (foodGroup.isTouching(player)){
	score = score + 10
	spawnFood()
	}

	fill("win")
	stroke(30)
	if (score===10 && time<600){

		text("You Win", 400,350)
	} else{
		text("You Lose", 400,350)
	}
  
  drawSprites();
  player.display()
  food.display()
 
}

function spawnFood(){
	food = new Food (0,0,30,30)
	food.x = Math.round(random(100,700))
	food.y = Math.round(random(100,600))

	foodGroup.add(food)
}



