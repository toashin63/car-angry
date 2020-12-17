class Form{
constructor(){ 
this.button=createButton("play") 
this.title=createElement("h2")
this.input=createInput("Enter your name")
this.greet=createElement("h3")
this.rb=createButton("reset")
    
}
display(){
   
   this.title.html("Toilet Racing toilet")
   this.title.position(displayWidth/2,0)
  this.rb.position(displayWidth-100,50)
   this.input.position(displayWidth/2,50)
   this.button.position(displayWidth/2,100)

   this.rb.mousePressed(()=>{
database.ref("/").update({
playerCount:0,
gameState:0

})
database.ref("players").remove()







   })
  
    this.button.mousePressed(()=>{
       this.button.hide()
       this.input.hide()
        player.name=this.input.value()
        playercount+=1
        player.index=playercount
        player.updateCount(player.index)
        this.greet.html("Hello"+player.name)
        this.greet.position(displayWidth/2,100)
        player.update()
    })

}

hide(){
this.button.hide()
this.title.hide()
this.input.hide()
this.greet.hide()

}

}