var dog, happyDog, database, foodStock, foodS, 

function preload()
{
	dog = loadImage("dogImg.png");
  	happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  	dog = createSprite(100, 100, 10,10);
  	
  	database = firebase.database;
  	foodStock = database.ref('Food');
  	foodStock.on("Value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
  	Food-=1;
  	writeStock(foodS);
  	dog.addImage(happyDog, "images/dogImg1.png");
  }

  drawSprites();
  
  textSize(25);
  fill("blue");
  text(foodStock, 200, 200);
  text("Press UP arrow key to feed milk to the dog", 250 ,250);

}

//function to write values in database;
function writeStock(x){
	if(x<=0){
		x = 0;
	}else{
		x = x-1;
	}
}