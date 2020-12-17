class Game{

constructor(){}
getState(){
database.ref("gameState").on("value",function(data){
    gamestate = data.val()
})
}
updateState(state)
{
database.ref("/").update({
   gameState: state
})
}
start()
{
    if(gamestate===0)
    {
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
    }
    car1 = createSprite(100,300,50,50)
    car2 = createSprite(300,300,50,50)
    car3 = createSprite(500,300,50,50)
    car4 = createSprite(700,300,50,50)
    
    car1.addImage(c1)
    car2.addImage(c2)
    car3.addImage(c3)
    car4.addImage(c4)
    cars = [car1,car2,car3,car4]
}
play(){
form.hide()
background("#c2b280")
image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
Player.getPlayerInfo()
player.getcae()
var index = 0
if(allplayers!==undefined){
var pos = 130 
var x = 100,y
for(var plr in allplayers)
{
    index = index +1
    pos+=20
    x = x+200
    y = displayHeight-allplayers[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
if(index===player.index)
{
cars[index-1].shapeColor="red"
stroke(10)
fill("red")
ellipse(x,y,60,60)
camera.position.y=cars[index-1].y

}
//fill ("red")
//else
//fill ("black")
textSize(30)
text(allplayers[plr].name+"  "+allplayers[plr].distance,120,pos)




}


}
if(keyIsDown(UP_ARROW)&&player.index!==null){


    player.distance+=50
    player.update()
}
if(player.distance>4200){
gamestate = 2
player.rank +=1
Player.updatecae(player.rank)

}
}
end(){
    console.log(player.rank)
}
}