var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(70, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.15;

	star = createSprite(630,30);
	star.addImage(starImg);
	star.scale = 0.3;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  drawSprites();
}

function keyPressed() {
	//write code here
	if(keyCode === 37){
		star.velocityY = (2);
		star.velocityX= (-2);

		fairy.velocityY = (-2);
		fairy.velocityX = (2);
	}
	if(keyCode === 32){
star.velocityX = (0);
star.velocityY = (0);

fairy.velocityY =(0);
fairy.velocityX =(0);
	}
}
