
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;
	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

	    pushFromLeftData = {

		"frames": [

		    {
			"filename": "pushFromLeft0",
			"frame": { "x": 0, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }
		    },

		    {
			"filename": "pushFromLeft1",
			"frame": { "x":150, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromLeft2",
			"frame": { "x":325, "y": 0, "w": 160, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromLeft3",
			"frame": { "x":0, "y":230, "w": 170, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromLeft4",
			"frame": { "x":230, "y": 235, "w": 160, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },
		    {
			"filename": "pushFromLeft5",
			"frame": { "x":0, "y":230, "w": 170, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromLeft6",
			"frame": { "x":325, "y": 0, "w": 160, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }

		    },

		    {
			"filename": "pushFromLeft7",
			"frame": { "x":150, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }

		    },
		    {
			"filename": "pushFromLeft8",
			"frame": { "x": 0, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }
		    }
		]
	    }

	    pushFromRightData = {
		"frames": [

		    {
			"filename": "pushFromRight0",
			"frame": { "x": 0, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }
		    },

		    {
			"filename": "pushFromRight1",
			"frame": { "x":220, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    } ,

		    {
			"filename": "pushFromRight2",
			"frame": { "x":450, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromRight3",
			"frame": { "x":75, "y": 260, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromRight4",
			"frame": { "x":335, "y": 260, "w": 170, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromRight5",
			"frame": { "x":75, "y": 260, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromRight6",
			"frame": { "x":450, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }


		    },

		    {
			"filename": "pushFromRight7",
			"frame": { "x":220, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }
		    }, 
		    {
			"filename": "pushFromRight8",
			"frame": { "x": 0, "y": 0, "w": 150, "h": 230 },
			"rotated": false,
			"trimmed": true,
			"spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
			"sourceSize": { "w": 140, "h": 60 }
		    }
		]
	    }

	    this.load.atlas('rightPunk', 'rightPunk.png', null, pushFromRightData);
	    this.load.atlas('leftPunk', 'leftPunk.png', null, pushFromLeftData);
	    this.load.image('farm', 'goatFarm.jpg');
	    this.load.image('Cow0', 'Cow-5.png'); 
	    this.load.image('Cow1', 'Cow-4.png');
	    this.load.image('Cow2', 'Cow-3.png');
	    this.load.image('Cow3', 'Cow-2.png');
	    this.load.image('Cow4', 'Cow-1.png');
	    this.load.image('Cow5', 'Cow1.png');
	    this.load.image('Cow6', 'Cow2.png');
	    this.load.image('Cow7', 'Cow3.png');
	    this.load.image('Cow8', 'Cow4.png');
	    this.load.image('Cow9', 'Cow6.png');
	},

	create: function () {

	//	this.preloadBar.cropEnabled = false;

	},

	update: function () {

	    this.state.start('MainMenu');
			
	/*	if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}
*/
	}

};
