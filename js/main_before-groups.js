//this game will have only 1 state
var GameState = {
  //load the game assets before the game starts
  preload: function() {
    this.game.load.image('background', 'assets/images/background.png');
    this.game.load.image('arrow', 'assets/images/arrow.png');
    this.game.load.image('dog', 'assets/images/dog.png');
    this.game.load.image('chicken', 'assets/images/chicken.png');
    this.game.load.image('cow', 'assets/images/cow.png');
    this.game.load.image('horse', 'assets/images/horse.png');
    this.game.load.image('pig', 'assets/images/pig.png');
    this.game.load.image('sheep', 'assets/images/sheep.png');
  },
  //executed after everything is loaded
  create: function() {
    
    //create a sprite for the background
    this.background = this.game.add.sprite(0, 0, 'background')
    
    this.dog = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'dog');
    this.dog.anchor.setTo(0.5);

    //enable user input on sprite
    this.dog.inputEnabled = true;
    this.dog.input.pixelPerfectClick = true;
    this.dog.events.onInputDown.add(this.animateAnimal, this);

    //left arrow
    this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
    this.leftArrow.anchor.setTo(0.5);
    this.leftArrow.scale.x = -1;
    this.leftArrow.customParams = {direction: -1};

    //left arrow user input
    this.leftArrow.inputEnabled = true;
    this.leftArrow.input.pixelPerfectClick = true;
    this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

    //right arrow
    this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
    this.rightArrow.anchor.setTo(0.5);
    this.rightArrow.customParams = {direction: 1};

    //right arrow user input
    this.rightArrow.inputEnabled = true;
    this.rightArrow.input.pixelPerfectClick = true;
    this.rightArrow.events.onInputDown.add(this.switchAnimal, this);    

  },
  //this is executed multiple times per second
  update: function() {
  },
  //play animal animation
  animateAnimal: function(sprite, event) {
    console.log('animate..');
  },
  //switch animal
  switchAnimal: function(sprite, event) {
    console.log('move animal');
  }

};

//initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.CANVAS);

game.state.add('GameState', GameState);
game.state.start('GameState');