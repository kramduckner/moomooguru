
var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'phaser', { preload: preload, create: create, update: update });

function preload() {
	
	game.load.atlas('cow', 'cowSprites.png', null, walkData);
	game.load.image('earth', './earth.jpg');
	game.load.image('grass', 'grass.png');
	game.load.image('fence', 'fence.png');
	game.load.image('barn', 'barn.png');
	game.load.image('collisionRec', 'stupidRec.png');
   
}


var group;
var cow;
var fence;
var collisionRec;
var groupOfGrassGroups; 
var fireRate = 300;
var nextFire = 0;
var gameOverText;
var textStyle;
var resetButton;
var timeText;
var timeCounter = 0;
var startText;
var topGrass;
var cowRight = true;
var grass;
var cowRectangle;
var startGame = false;
var bestTimeText;
var grassPresent = true;
var totalGrassCount = 0;
var grassGroupCount = 0;
var timeMax = 2;
var pause = false;
var bestTime = 0;
var numMax = 3;
var deleteGrass = false;


function create() {
	

	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.add.sprite(0,0, 'earth');
	collisionRec = game.add.sprite(0,234, 'collisionRec'); //Needed a rectangle for detecting grass growing above fence
	game.add.sprite(400, 102, 'barn');
	fence = game.add.sprite(0, 240, 'fence');  


	grassGroup1 = game.add.group();
	grassGroup2 = game.add.group();
	grassGroup3 = game.add.group();
	grassGroup4 = game.add.group();
	grassGroup5 = game.add.group();
	grassGroup6 = game.add.group();
	grassGroup7 = game.add.group();
	grassGroup8 = game.add.group();
	grassGroup9 = game.add.group();
	grassGroup10 = game.add.group();
	
		


	groupOfGrassGroups = game.add.group(); 

	groupOfGrassGroups.add(grassGroup1);  
	
		
	buildNewGrass(grassGroup1); 
	
	startText = game.add.text(150,200,'Hit spacebar to start. Press r to restart', {font: "20px Arial", align: "center" } );
	timeText = game.add.text(460, 10, 'time: 0');
	bestTimeText = game.add.text(10, 10, "best time: " + timeCounter);
	gameOverText = game.add.text(180, 200, 'Game over! Press r to reset', {font: "20px Arial", align: "center" });
	gameOverText.visible = false;
	cow = game.add.sprite(250,250, 'cow'); 
	cow.animations.add('run', Phaser.Animation.generateFrameNames('cowwalk',0,4, '', 4), 20, false);
	cow.animations.add('eat', Phaser.Animation.generateFrameNames('coweat',0,7,'',4 ), 20, false); 
	game.physics.enable(cow, Phaser.Physics.ARCADE);
	cow.body.collideWorldBounds = true;
	cow.body.bounce.setTo(1, 1);
	cow.anchor.setTo(0.5, 0.5);


	
}



function updateCounter(){
	if (pause === false){
	timeCounter++;
	timeText.setText('time: ' + timeCounter);	
	}
}



function buildNewGrass(groupo) {

	if (pause === false){
	Phaser.Sprite.prototype.count = 1;
		
	 var rndNum1 = game.rnd.integerInRange(0, 400); 
	
	 groupo.create(game.rnd.integerInRange(100, 585), 300 - game.rnd.integerInRange(0,5), 'grass');

	groupOfGrassGroups.add(groupo);
	grassPresent = true; 
	
			}

}



function update(){	
	if (pause === true){
		
	}	

	if (pause !== true){
	
		checkOverlap();
	}


	 if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        cow.x -= 5;
	cow.scale.x = -1;

	cow.animations.play('run');
	cowRight = false;	
       
    }
	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        cow.x += 5;
	cow.scale.x = 1;

	cow.animations.play('run');
	cowRight = true;	
    }

	if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
	if (cow.y <= 242){
		cow.y = 242;

	}
        else 
		cow.y -= 5;
       
    }
   	 else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        cow.y += 5;
        
    }
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		cow.animations.play('eat', 20, false);

	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && startGame === false){
		startText.visible = false;
		startGame = true;
		startGameF();

		
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.R)){
		reset();
		if (gameOverText.visible === true){
			gameOverText.visible = false;		
		}
	}

	if (deleteGrass === true){

		deleteAllGrass();
	}

}



function startGameF(){

	game.time.events.loop(Phaser.Timer.SECOND * timeMax, growGrassEngine , this);  	
	game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);	
	game.time.events.loop(Phaser.Timer.SECOND * 15, changeCount, this)
	game.time.events.loop(Phaser.Timer.SECOND * 20, changeTime, this);
	game.time.events.loop(Phaser.Timer.SECOND * 5, makeANewGrassGroup, this);

}



function growGrassEngine(){  

	
	if (pause === false){
		

			var rndNumber = game.rnd.integerInRange(0, numMax);
	
				if (rndNumber === 0){


					groupOfGrassGroups.forEach(function(grassGroup){
						
						growGrass(grassGroup);
	



		});



		}
	}

}


function growGrass(group){
	if (group.getTop() !== undefined ){  
		var grass = group.getTop();
		group.create(grass.x + game.rnd.integerInRange(-2, 2), grass.y - 10, 'grass');
		grass.count++;
		totalGrassCount++;
		grassPresent = true; 
	
		}
	}





function makeANewGrassGroup(){

	
		switch(grassGroupCount){
			case 0:
				buildNewGrass(grassGroup2);
				grassGroupCount++;
				break;
			case 1:
				buildNewGrass(grassGroup3);
				grassGroupCount++;
				break;
			case 2:
				buildNewGrass(grassGroup4);
				grassGroupCount++;
				break;
			case 3:	
				buildNewGrass(grassGroup5);
				grassGroupCount++;
				break;
			case 4: 
				buildNewGrass(grassGroup6);
				grassGroupCount++;
				break;
			case 5: 
				buildNewGrass(grassGroup7);
				grassGroupCount++;
				break;
			case 6: 
				buildNewGrass(grassGroup8);
				grassGroupCount++;
				break;
			case 7:
				buildNewGrass(grassGroup9);
				grassGroupCount++;
				break;
			case 8:
				buildNewGrass(grassGroup10);
				grassGroupCount++;
				break;
		
	}

}



function changeTime(){

	timeMax*0.5;
	
}

function changeCount(){
	if (numMax !== 0) {
		numMax--;
	}
}



function checkOverlap() {
	

	var cowBoundsX = cow.getBounds()


	if (cowRight === true){  
		cowRectangle = new Phaser.Rectangle((cowBoundsX.x + 95), (cowBoundsX.y + 60), 50, 50);  
	}
	else {	cowRectangle = new Phaser.Rectangle((cowBoundsX.x), (cowBoundsX.y + 60), 50, 50);
	} 
	

	var fenceBounds  = collisionRec.getBounds();


	groupOfGrassGroups.forEach(function(grassGroup){	



			var topGrass = grassGroup.getTop();   
			var index = grassGroup.getIndex(topGrass);
			var cowBounds = cow.getBounds();
			var grassBounds = grassGroup.getBounds();

		
			if (Phaser.Rectangle.intersects(cowRectangle, grassBounds) && game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && game.time.now > nextFire){
			

				 
				grassGroup.remove(topGrass, true);
				nextFire = game.time.now + fireRate;

				if (index === 0){ 
			
				buildNewGrass(grassGroup);
				grassGroup.children[0].visible = false; 

				game.time.events.add(Phaser.Timer.SECOND, showGrass , this, grassGroup.children[0]);
				
				
				
	
				

 	}
	

		}
					
		

if (Phaser.Rectangle.intersects(fenceBounds, grassBounds)) { 

	gameOver();  

		
	}

});
}



function showGrass(thing){

	thing.visible = true;
	
}


function gameOver(){
    $('#phaser').trigger('gameOver');
    gameOverText.visible = true;
    pause = true;
}


function deleteAllGrass(){
	
	for (var i = 0; i < groupOfGrassGroups.children.length; i++){
		for ( var j = groupOfGrassGroups.children[i].length; j > -1; j--){
		
			groupOfGrassGroups.children[i].remove(groupOfGrassGroups.children[i].children[j]);	
	}};
	
	game.time.events.add(Phaser.Timer.SECOND * 3, changeDeleteGrass , this);

	
}


function changeDeleteGrass(){
	
	deleteGrass = false;	

}

function reset(){

	deleteGrass = true;
	pause = false; 
	cow.reset(250, 250);
	gameOverText.visible = false;
	grassGroupCount = 0;
	if (timeCounter > bestTime){
		bestTime = timeCounter;
		bestTimeText.setText('best time: ' + bestTime);	
	}
	

	timeCounter = 0;
	numMax = 3;
	timeMax = 2;


}



var walkData = {
    "frames": [

{
    "filename": "cowwalk0000",
    "frame": { "x": 0, "y": 0, "w": 150, "h": 113 },
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    "sourceSize": { "w": 140, "h": 60 }
},
{
    "filename": "cowwalk0001",
    "frame": { "x": 151, "y": 0, "w": 150, "h": 113 },
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 60 },
    "sourceSize": { "w": 140, "h": 60 }
},

{
    "filename": "cowwalk0002",
    "frame": { "x": 300, "y": 0, "w": 150, "h": 113 },
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
    "sourceSize": { "w": 140, "h": 60 }
},
{
    "filename": "cowwalk0003",
    "frame": { "x": 451, "y": 0, "w": 150, "h": 113 },
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
    "sourceSize": { "w": 140, "h": 60 }
},

{
    "filename": "cowwalk0004",
    "frame": { "x": 0, "y": 0, "w": 150, "h": 113 },
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    "sourceSize": { "w": 140, "h": 60 }
},

{
 	   		"filename": "coweat000",
	   		"frame": { "x": 0, "y": 0, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
	{
 	   		"filename": "coweat0001",
	   		"frame": { "x": 0, "y": 99, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
{
 	   		"filename": "coweat0002",
	   		"frame": { "x": 150, "y": 100, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
	{
 	   		"filename": "coweat0003",
	   		"frame": { "x": 299, "y": 99, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
{
 	   		"filename": "coweat0004",
	   		"frame": { "x": 449, "y": 99, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
	{
 	   		"filename": "coweat0005",
	   		"frame": { "x": 0, "y": 200, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
	{
 	   		"filename": "coweat0006",
	   		"frame": { "x": 148, "y": 199, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
},
	{
 	   		"filename": "coweat0007",
	   		"frame": { "x": 0, "y": 0, "w": 150, "h": 113 },
    			"rotated": false,
   			 "trimmed": true,
    			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
    			"sourceSize": { "w": 140, "h": 60 }
}





],
    "meta": {
        "app": "http://www.texturepacker.com",
        "version": "1.0",
        "image": "sprites.png",
        "format": "RGBA8888",
        "size": { "w": 252, "h": 256 },
        "scale": "0.2",
        "smartupdate": "$TexturePacker:SmartUpdate:fb56f261b1eb04e3215824426595f64c$"
    }
};


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.documentElement.addEventListener('keydown', function (e) {
    if ( ( e.keycode || e.which ) === 32 || (e.keycode || e.which === 38) || (e.keycode || e.which === 40) || (e.keycode || e.which === 37) || (e.keycode || e.which === 39) ){
        e.preventDefault();
    }
}, false);	

		
	
