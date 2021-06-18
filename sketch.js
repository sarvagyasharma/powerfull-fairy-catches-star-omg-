var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairysong = loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fairysong.play()
	//create fairy sprite and add animation for fairy

	fairy = createSprite(130,520,10,10);
	fairy.addAnimation("fairyflies",fairyimg);
	//lol fairyflies sounds like a name of an insect like homeflies 
	fairy.scale = 0.21




	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  //i have a dount i mean  the star would be very very hot 
  //she must have wore some transparent gloves
  //but only a glove i mean thats not enough
  // nevermind ill leave that part to the fairy itself :(

  drawSprites();

}

function keyPressed() {


	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x -30;
	}


	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x +30;
	
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
