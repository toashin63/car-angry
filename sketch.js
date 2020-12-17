var ball;
var playercount = 0,gamestate = 0,player,game,form
var database,position,allplayers
var car1,car2,car3,car4,cars
var c1,c2,c3,c4,track
function preload() {
c1 = loadImage("car1.png")
c2 = loadImage("car2.png")
c3 = loadImage("car3.png")
c4 = loadImage("car4.png")
track = loadImage("track.jpg")



}


function setup(){
    createCanvas(displayWidth-30,displayHeight-200);
 
    database = firebase.database()
    //to read data from the database we use .on  
game=new Game()
game.getState()
game.start()
  
}

function draw(){
    background("white");
    if(playercount===4){
game.updateState(1)

    }
    if(gamestate===1){
clear ()
game.play()

    }
    if(gamestate===2){
game.end()

    }
    drawSprites();
}


