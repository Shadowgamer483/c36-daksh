class Player{
constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
}
getCount(){
var playref=database.ref('player_count');
playref.on("value",function(data){
    playerCount=data.val();
})

}
updateCount(count){
    database.ref('/').update({player_count:count})
}
update(){
    var playerindex="players/player"+this.index
    database.ref(playerindex).set({name:name,distance:this.distance})
}
static Playerinfo(){
    var playerdata=database.ref('players')
    playerdata.on("value",(data)=>{
allplayers=data.val();
    })
}

}