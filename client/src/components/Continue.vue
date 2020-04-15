<template>
    <div>
        <template v-for="game in games">
            <b-button variant="success" v-bind:href="'http://localhost:3000/game?id=' + game.id">It's your turn in {{game.name}}.</b-button><br><br>
        </template>
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router"
export default {
    name: 'Continue',
    data () {
        return{
            games : []
        }
    },
    methods: {
        getGamesCurrentTurn: async function() {
            let gamesList = await axios.get("http://localhost:3000/api/games")
            if (gamesList.status == 200) {
                let user = await axios.get('http://localhost:3000/api/user')
                if (user.status == 200){
                    let gameData = gamesList.data
                    
                    gameData.forEach(game => {
                        if(game.currentTurn == user.data){
                            this.games.push({ 
                                id: game._id, 
                                name: game.name
                            })
                        }
                    });
                }
            }
            
        }
    },
    mounted(){
        this.getGamesCurrentTurn()
    }
}
</script>