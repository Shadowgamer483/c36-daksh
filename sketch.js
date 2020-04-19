var canvas, backgroundImage; var gamestate = 0; var playerCount; var database; var form, player, game,distance=0,allplayers;
 function setup(){ 
   canvas = createCanvas(400,400); database = firebase.database();
  game=new Game();
  game.getstate();
  game.start();
  }
  function draw(){
if(playerCount===4){
  game.update(1);
}
if(gamestate===1){
  clear();
  game.play();
}
  }