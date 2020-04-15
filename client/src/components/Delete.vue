<template>
    <div>
        <template v-for="game in games">
            <b-button variant="danger" @click="deleteGame(game.id)">Click here to delete {{game.name}}.</b-button><br><br>
        </template>
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router"
export default {
    name: 'Delete',
    data () {
        return{
            games : []
        }
    },
    methods: {
        getPlayersGames: async function() {
            let gamesList = await axios.get("http://localhost:3000/api/games")
            if (gamesList.status == 200) {
                let user = await axios.get('http://localhost:3000/api/user')
                if (user.status == 200){
                    let gameData = gamesList.data
                    
                    gameData.forEach(game => {
                        if(game.owner == user.data){
                            this.games.push({ 
                                id: game._id, 
                                name: game.name
                            })
                        }
                    });
                }
            }
        },
        deleteGame: async function(gameId){
            let data = {
                id : gameId
            }
            let gameList = await axios.post("http://localhost:3000/api/games/delete", data)
            console.log(gameList)
            if(gameList.status == 200){
                for(var i = 0; i < this.games.length; i++) {
                    if (this.games[i].id == gameId){
                        this.games.splice(i, 1);
                    }
                }    
            }
        }
    },
    mounted(){
        this.getPlayersGames()
    }
}
</script>