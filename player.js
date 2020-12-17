class Player
{
        constructor()
        {this.name=null
        this.distance=0
        this.rank = null
    this.index=null}
        getCount()
        {
            database.ref("playerCount").on("value",function(data){
              playercount=data.val()  
            })
        }

        updateCount(count){
            database.ref("/").update({
                playerCount:count
            })
        }

        update()
        {
            var pIndex="players/player"+this.index
            database.ref(pIndex).set({
                name:this.name,
                distance:this.distance
            })
        }

static getPlayerInfo(){
database.ref("players").on("value",(data)=>{
allplayers = data.val()

})


}
getcae(){
database.ref("cae").on("value",function(data){
this.rank = data.val()



})
}
static updatecae(rank){
database.ref("/").update({
cae:rank

})


}



}