
BasicGame.Game = function (game) {

    this.game;      
    this.add;       
    this.camera;   
    this.cache;    
    this.input;     
    this.load;      
    this.math;      
    this.sound;     
    this.stage;     
    this.time;      
    this.tweens;   
    this.state;     
    this.world;     
    this.particles; 
    this.physics; 
    this.rnd;      
    this.noCurrentPush = true;
    this.fallSpeed = 1000;
   
};

BasicGame.Game.prototype = {
    
     create: function () {
	
	 this.nextAdjust = 0;
	 this.nextFall = 0;
	 this.avertedTipCount = 0;
	 this.farm = this.add.sprite(0,0, 'farm');
	 this.cow = this.add.sprite(200, 40, 'Cow4');
	 this.leftPunk = this.add.sprite(0, 225, 'leftPunk');
	 this.rightPunk = this.add.sprite(550, 225, 'rightPunk');
	 this.rightPunk.animations.add('pushFromRight', Phaser.Animation.generateFrameNames('pushFromRight', 0, 8), 10, false);
	 this.leftPunk.animations.add('pushFromLeft', Phaser.Animation.generateFrameNames('pushFromLeft', 0, 8), 10, false);
	 this.avertedCountText = this.add.text(500, 10, "Averted Tips:" + this.avertedTipCount );
    },

    tipCow: function(increase){
	
	var string = this.cow.key.substring(3,4);
	var num = parseInt(string);

	if (increase){

	    num++;

	} else {

	    num--;
	}

	this.cow = this.add.sprite(200, 40, 'Cow' + num.toString());
    },

    adjustLeftHandler: function(){
	if (this.time.now >= this.nextAdjust && this.cow.key !== 'Cow9'){
	    console.log('tipping left');
	    this.cow.kill();
	    this.tipCow(true);
	    this.nextAdjust = this.time.now + 100;
	}
    },

    adjustRightHandler: function(){
	
	if (this.time.now >= this.nextAdjust && this.cow.key !== 'Cow0'){

	    this.cow.kill();
	    this.tipCow(false);
	    this.nextAdjust = this.time.now + 100;

	} else if(this.cow.key === "Cow0"){
	    
	   // this.time.events.add(Phaser.Timer.Second * 2, this.quitGame());
	}

    },

    tipLeftHandler: function(){

	if (this.time.now >= this.nextFall && this.cow.key !== 'Cow0'){
	    
	    this.cow.kill();
	    this.tipCow(false);
	    this.nextFall = this.time.now + 300;

	} else if(this.cow.key === "Cow4"){

	    this.fallLeft = false;
	    this.noCurrentPush = true;
	    this.incrementAvertedCount();
	}
    },

    tipRightHandler: function(){

	if (this.time.now >= this.nextFall && this.cow.key !== 'Cow9'){

	    this.cow.kill();
	    this.tipCow(true);
	    this.nextFall = this.time.now + 300;

	} else if(this.cow.key === 'Cow4'){
	    
	    this.fallRight = false;
	    this.noCurrentPush = true;
	    this.incrementAvertedCount();
	}
    },

    incrementAvertedCount: function(){

	this.avertedTipCount++;
	this.avertedCountText.setText("Averted Tips:" + this.avertedTipCount);

    }, 

    mapCowImage: function(){

	return parseInt(this.cow.key.substring(3,4));
	
    },
    
    punksHandler: function(){

	if (this.noCurrentPush){

	    var randInt = this.rnd.integerInRange(0,250);

	    if (randInt === 3){

		this.leftPunk.play('pushFromLeft');
		this.noCurrentPush = false;
		this.fallLeft = true;

	    } else if(randInt === 4){

		this.rightPunk.play('pushFromRight');
		this.noCurrentPush = false;
		this.fallRight = true;
	    }
	}

	if (this.fallLeft && this.cowKey !== 'Cow9'){

		this.tipLeftHandler();
	    
	} else if (this.fallRight && this.cowKey !== 'Cow0'){

	    this.tipRightHandler();
	}
    },

    inputHandler: function(){

	if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){

	    this.adjustLeftHandler();
	}
	else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){

	    this.adjustRightHandler();
	}

    },
    
    update: function () {
	
	this.punksHandler(); 
	this.inputHandler();
    },

    quitGame: function () {
	
        this.state.start('MainMenu');

    },
};
