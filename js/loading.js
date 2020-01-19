var loading = 
{	
	preload: function()
	{
			
		// Loading text
		var loadingLabel = game.add.text(game.world.centerX, 150, 					'...please wait...', {font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);
		
		// Preloader
		var progressBar = game.add.sprite(game.world.centerX, 200, 						'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);
		
		// Title
		game.load.image('birdAttack', 'images/birdAttack.png');
		
		// Particles
		game.load.image('pixel', 'images/pixel.png');
		game.load.image('pixelRed', 'images/pixelRed.png');
		game.load.image('pixelOrange', 'images/pixelOrange.png');
		
		// Buttons
		game.load.spritesheet('mute', 'images/onoff.png', 64, 61);
		game.load.image('mobGames', 'images/mobGames.png');
		game.load.image('buttonStart1', 'images/startButton.png');
		game.load.image('home', 'images/home.png');
		game.load.image('again', 'images/again.png');
		game.load.image('mg', 'images/mg.png');
		
		game.load.image('instructions', 'images/instructions.png');
		
		// Game over
		game.load.image('black', 'images/black.png');
		
		// Bg objects
		game.load.image('background', 'images/background.png');
		game.load.image('menuBg', 'images/bgMenu.png');
		
		// Player's body rectangle
		game.load.image('playersBody', 'images/playersBody.png');
		
		//Protection
		game.load.image('protection', 'images/bubble.png');
		
		// Sprite sheets
		game.load.spritesheet('dude', 'images/yellow_bird_4.png', 80, 54)
		game.load.spritesheet('grumpy', 'images/grumpy.png', 50, 51)
		game.load.spritesheet('dragon_sheet', 'images/dragon_sheet.png', 69, 50)
		game.load.spritesheet('powerUp', 'images/powerUp.png', 40, 41)
		game.load.spritesheet('coin', 'images/coin_sheet.png', 40, 40)
		
		game.load.image('dragonComing','images/dragonComing.png')
		game.load.image('dragonComingR','images/dragonComingR.png')
		game.load.image('grumpyComing','images/grumpyComing.png')
		game.load.image('grumpyComingR','images/grumpyComingR.png')
		
		// Audio
		game.load.audio('touchSound', ['audio/touchSound.mp3', 'touchSound.ogg']);
		
		game.load.audio('bird1', ['audio/bird1.mp3', 'audio/bird1.ogg']);
		game.load.audio('bird2', ['audio/bird2.mp3', 'audio/bird2.ogg']);
		game.load.audio('kickEnemy1', ['audio/kickEnemy.mp3', 'audio/kickEnemy.ogg']);
		game.load.audio('kickEnemy2', ['audio/kickEnemy2.mp3', 'audio/kickEnemy2.ogg']);
		game.load.audio('coinSound', ['audio/coinSound.mp3', 'coinSound.ogg']);
		game.load.audio('powerUpSound', ['audio/powerUpSound.mp3', 'powerUpSound.ogg']);
		game.load.audio('onGroundSound', ['audio/onGroundSound.mp3', 'onGroundSound.ogg']);
		game.load.audio('attack', ['audio/attack.mp3', 'attack.ogg']);
		game.load.audio('buttonTouch', ['audio/touch3.mp3', 'touch3.ogg']);
		game.load.audio('music1', [ 'audio/music1.mp3',
					 'audio/music1.ogg']);
},
  	create: function()
	{
  		// After loading, show main menu
		game.state.start("menu");
	}
}     