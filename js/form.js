class Form {
    constructor(){
        this.input=createInput("name")
    this.button=createButton('nuke')
    this.greeting=createElement('h3')
    }
    hide(){
        this.greeting.hide();
this.button.hide();
this.input.hide();
    }
    display(){
        var title=createElement('h1')
    title.html("car game")
    title.position(100,50)
    
    this.input.position(200,200)
    this.button.position(200,150)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
       playerCount+=1;
       player.index=playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("welcome may the force be with you "+""+player.name)
       this.greeting.position(200,200)
    })
    }
    
    }