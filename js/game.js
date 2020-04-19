class Game{
    constructor()
    {}
    getstate(){
        var referi=database.ref('gamestate');
        referi.on("value",function(data){
          gamestate=  data.val()
        
        }) 
    }
    update(state){
        database.ref('/').update({gamestate:state})
    }
  async  start(){
        if(gamestate===0){
            player=new Player();
            var  playref=await database.ref('player_count').once("value")
            if(playref.exists()){
                playerCount=playref.val();
                player.getCount();
            }
         
            form=new Form();
            form.display()
        }
    }
 play(){
     form.hide();
     textSize(20)
text("GAME START MAY THE FORCE BE WITH YOU",10,100)
Player.Playerinfo();
if(allplayers!==undefined){
    var displayposition=140
    for(var plr in allplayers){
        if(plr==="player"+player.index){
            fill("red")
        }
        else{
            fill("blue")
        }
        displayposition+=20;
        textSize(20);
        text(allplayers[plr].name+":"+allplayers[plr].distance,200,displayposition)

    }
}
if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update();
}
    }
    
    }