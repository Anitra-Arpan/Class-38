var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car_image1 , car_image2 , car_image3 , car_image4 ;
var track_image , ground_image ;

function preload () {

  car_image1 = loadImage ( "images/car1.png " ) ;
  car_image2 = loadImage ( "images/car2.png " ) ;
  car_image3 = loadImage ( "images/car3.png " ) ;
  car_image4 = loadImage ( "images/car4.png " ) ;

  track_image = loadImage ( "images/track.png" ) ;

  ground_image = loadImage ( "images/ground.png" ) ;
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log( displayHeight ) ;
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if (gameState === 2 ) {
    game . end () ;
  }
  console . log ( "draw" ) ;

}
