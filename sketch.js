var cropimg,fertiliserimg,heavyrainimg,organicManureimg,pesticideimg;
var pestsimg,ploughimg,seedsimg,soilimg,waterimg,weedsimg,soil2img;
var seeds,water,fertilisers,organicManure,pesticides,plough,ploughTransparent;
var seedsTransparent,seed,seedImg,fertiliserTransparent;
var organicManureTransparent,crop,pesticideTransparent,harvester,harvesterimg,harvesterTransparent;
var ground;

var START = 0;
var PLAY = 1;
var PLOUGHING = 2;
var SOWING = 3;
var FERTILISING = 4;
var IRRIGATING = 5;
var PLANTING = 6;
var PROTECTION = 7; 
var HARVESTING = 8;
var gameState = 0;



function preload()
{
	//loading images
	cropimg = loadImage("crop.png");
	fertiliserimg = loadImage("fertilisers.jpg");
	heavyrainimg = loadImage("heavy rain.png");
	organicManureimg = loadImage("organicManure.jpg");
	pesticideimg = loadImage("pesticides.png");
	pestsimg = loadImage("pests.png");
	ploughimg = loadImage("plough.png");
	seedsimg = loadImage("seeds.jpg");
	soilimg  = loadImage("soils.jpg");
	waterimg = loadImage("water.jpg");
	weedsimg = loadImage("weeds.jpg");
	soil2img = loadImage("soil2.jpg");
	ploughTransparent = loadImage("ploughTransparent.png");
	seedsTransparent =loadImage("seedsTransparent.png");
	seedImg = loadImage("seed.png");
	fertiliserTransparent = loadImage("fertiliserTransparent.png");
	organicManureTransparent = loadImage("organicManureTransparent.png");
	pesticideTransparent = loadImage("pesticideTransparent.png");
	harvesterimg = loadImage("harvester.jpg");
	harvesterTransparent = loadImage("TransparentHarvester.png");

}

function setup() {
	//creating canvas
	createCanvas(1700,800);

	// engine = Engine.create();
	// world = engine.world;

	// seeds
	seeds = createSprite(1650,50,50,50);
	seeds.scale = 0.5;
	seeds.addImage("seeds",seedsimg);

	// water
	water = createSprite(1650,160,10,50);
	water.scale = 0.12;
	water.addImage("water",waterimg);

	//fertilisers
	fertilisers = createSprite(1650,250,50,50);
	fertilisers.scale = 0.5;
	fertilisers.addImage("fertilisers",fertiliserimg);

	// pesticides
	pesticides = createSprite(1650,350,50,50);
	pesticides.scale = 0.3;
	pesticides.addImage("pesticides",pesticideimg);

	//organic manure
	organicManure = createSprite(1650,450,50,50);
	organicManure.scale = 0.2;
	organicManure.addImage("organicManure",organicManureimg);

	//plough
	plough = createSprite(1650,600,50,50);
	plough.scale = 0.5;
	plough.addImage("plough",ploughimg);

	//harvester
	harvester = createSprite(1650,750,50,50);
	harvester.scale = 0.3;
	harvester.addImage("harvester",harvesterimg);


	//invisible ground
	ground = createSprite( 800,400,50,50);
	ground.visible = false;
	ground.shapeColor = "red";
	
  
}


function draw() 
{
  rectMode(CENTER);
  background(soilimg);
  
  textSize(20);
 text("organicManure",1570,515);

 //welcome
 if(gameState === 0)
 {
	stroke("black");
	textSize(50);
	text("Welcome to the AGRO GAME",350,400);
	text("Press SPACE to start the game ",350,500);
  }

//start
  if(keyDown("space"))
  {
	gameState = 1; 
  }
	
  if(gameState === 1)
  {
	ground.visible = true;
	
	textSize(50);
	text("STEP 1: Start with ploughing the land",200,400);
  }

  // ploughing
  if(mousePressedOver(plough))
	{
		text("Drag the plough here",800,300);
	stroke("black");
		gameState = 2;
		plough.scale = 1;
		plough.addImage("plough",ploughTransparent);
	}

if(gameState === 2)
{
	if(mousePressedOver(plough))
	{
		plough.x = mouseX;
		plough.y = mouseY;
		
	}

	if(plough.isTouching(ground))
	{
	
		background(soil2img);
		 plough.visible = false;
		 ground.visible = false;
		textSize(70);
		stroke("black");
		text("STEP 2 : Sow the seeds",350,400);
	}
}

//sowing
 if(mousePressedOver(seeds))
	{
		text("Drag the it here",800,300);
	stroke("black");
		gameState = 3;
		seeds.scale = 0.5;
		seeds.addImage("seeds",seedsTransparent);
	}

	if(gameState === 3)
{
	background(soil2img);
	if(mousePressedOver(seeds))
	{
		seeds.x = mouseX;
		seeds.y = mouseY;
	}

	 if(seeds.isTouching(ground))
	 {

		// creating seeds
		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(100,i,50,50);
		seed.addImage("seed",seedImg);
		}

		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(300,i,50,50);
		seed.addImage("seed",seedImg);
		}

		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(500,i,50,50);
		seed.addImage("seed",seedImg);
		}

		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(700,i,50,50);
		seed.addImage("seed",seedImg);
		}

		
		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(900,i,50,50);
		seed.addImage("seed",seedImg);
		}

		
		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(1100,i,50,50);
		seed.addImage("seed",seedImg);
		}

		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(1300,i,50,50);
		seed.addImage("seed",seedImg);
		}

		for(var i = 100 ; i < 800; i = i + 100)
		{
		seed = createSprite(1500,i,50,50);
		seed.addImage("seed",seedImg);
		}
	
		//instruction
		seeds.visible = false;
		textSize(70);
		stroke("black");
		text("STEP 3 : Adding manure or fertiliser",350,400);
  }
}

//adding fertiliser
if(mousePressedOver(fertilisers) )
{
	text("Drag the it here",800,300);
	stroke("black");
	gameState = 4;
	fertilisers.scale = 0.5;
	fertilisers.addImage("fertrillisers",fertiliserTransparent);
}
//adding manure
if(mousePressedOver(organicManure))
{
	text("Drag the it here",800,300);
	stroke("black");
	gameState =4;
	organicManure.scale = 0.3;
	organicManure.addImage("organicManure",organicManureTransparent);
}

if(gameState === 4)
{
	background(soil2img);

	if(mousePressedOver(organicManure))
	{
		organicManure.x = mouseX;
		organicManure.y = mouseY;
	}

	if(mousePressedOver(fertilisers))
	{
		fertilisers.x = mouseX;
	    fertilisers.y = mouseY;
	}

	if(fertilisers.isTouching(ground) || organicManure.isTouching(ground))
	 {
		organicManure.visible = false;
		fertilisers.visible = false;
		textSize(70);
		stroke("black");
		text("Wow you have fertilised your land greatly",250,300);
		text("STEP 4 : Irrigate your land with water",350,400);
	 }
}

//irrigating
if(mousePressedOver(water))
{
	text("Drag the it here",800,300);
	stroke("black");
	gameState = 5;
}
if(gameState === 5)
{

	background("lightblue");
	water.visible = false;
	textSize(70);
	stroke("black");
	text("Few days later...",350,300);
	text("Press right arrow to continue",350,400);
}

//planting
if(keyDown("RIGHT_ARROW"))
{
	gameState = 6;
}

if(gameState === 6)
{
   background(soil2img);

   // croping
   for(var i = 100 ; i < 800; i = i + 100)
   {
   crop = createSprite(100,i,50,50);
   crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   for(var i = 100 ; i < 800; i = i + 100)
   {
	crop = createSprite(300,i,50,50);
	crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   for(var i = 100 ; i < 800; i = i + 100)
   {
	crop = createSprite(500,i,50,50);
	crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   for(var i = 100 ; i < 800; i = i + 100)
   {
	crop = createSprite(700,i,50,50);
	crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   
   for(var i = 100 ; i < 800; i = i + 100)
   {
	crop = createSprite(900,i,50,50);
	crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   
   for(var i = 100 ; i < 800; i = i + 100)
   {
	crop= createSprite(1100,i,50,50);
	crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   for(var i = 100 ; i < 800; i = i + 100)
   {
	crop  = createSprite(1300,i,50,50);
	crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   for(var i = 100 ; i < 800; i = i + 100)
   {
  crop = createSprite(1500,i,50,50);
  crop.scale = 0.2;
   crop.addImage("crop",cropimg);
   }

   textSize(70);
   stroke("black");
   text("Wow your crop started growing",350,300);
   text(" STEP 5 : add pesticides to protect your crop ",350,400);
}

// pesticides
if(mousePressedOver(pesticides))
{
	text("Drag the it here",800,300);
	stroke("black");
	gameState = 7;
	pesticides.scale = 0.5;
	pesticides.addImage("pesticide",pesticideTransparent);
}

 if(gameState === 7)
 {
	background(soil2img);

	if(mousePressedOver(pesticides))
	{
		text("Drag the plough here",800,300);
	stroke("black");
		pesticides.x = mouseX;
	    pesticides.y = mouseY;
	}

	if(pesticides.isTouching(ground))
 {
		pesticides.visible = false;
		textSize(70);
 		stroke("black");
		text("Great!!",250,300);
 		text(" STEP 6 : harveste your land",350,400);
	  }
 }

 ///harvester
 if(mousePressedOver(harvester))
{
	text("Drag the it here",800,300);
	stroke("black");
	gameState = 8;
	harvester.scale = 0.5;
	harvester.addImage("harvester",harvesterTransparent);
}
if(gameState === 8)
{
   background(soil2img);

   if(mousePressedOver(harvester))
   {
	  harvester.x = mouseX;
	  harvester.y = mouseY;
   }

   if(harvester.isTouching(ground))
{
	  harvester.visible = false;
	   textSize(70);
		stroke("black");
	   text("Great!!",250,300);
		text("hurrah ! you won the game ",350,400);
		text("press R to restart",350,500);
	 }
}
if(keyDown("r"))
{
	gamestate = 0;
}

  drawSprites(); 
}




