<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-dropdown id="dropdown-form" text="Search for Player to Join New Game" variant="primary" ref="dropdown" class="m-2">
                        <b-dropdown-form>
                            <b-form-group label="Search" label-for="search-player" @submit.stop.prevent>
                                <b-form-input
                                    id="search-player"
                                    size="sm"
                                    placeholder="Player's Username"
                                    v-model="query"
                                ></b-form-input>
                            </b-form-group>

                            <b-button variant="primary" size="sm" @click="search">Search</b-button>
                            
                        </b-dropdown-form>
                        <b-dropdown-divider></b-dropdown-divider>
                        <!-- Somehow display results here -->
                        <div v-if="playersNames.includes(result.name)">
                            <b-dropdown-item>Player already in game!</b-dropdown-item>
                        </div>
                        <div v-else-if="result != ''">
                            <b-dropdown-item-button  @click="join">Join {{ result.name }} to game</b-dropdown-item-button>
                        </div>
                            <b-dropdown-item>{{ message }}</b-dropdown-item>
                    </b-dropdown>
                </b-col>
                <b-col>
                    <h2>
                        Players in Game:
                    </h2>
                    <b-container>
                        <div v-for="player in players">
                            <b-row>
                                <b-col cols="4">
                                    {{ player.name }}        
                                </b-col>
                                <b-col>
                                    <img class="avatar" v-bind:src="player.avatar" alt='Avatar Image'>
                                </b-col>
                                <b-col>
                                    <b-button v-if="player!= user" variant="outline-danger" size="sm" @click="remove(player)">Boot Player</b-button>
                                </b-col>
                            </b-row>
                            <br>
                        </div>
                    </b-container>
                </b-col>
                <b-col>
                    <label>
                        <span>Name of the Game: </span>
                        <input type="string" v-model="gameName">
                    </label>
                </b-col>
                <b-col>
                    <b-button variant="success" @click="createGame">Start Game</b-button>
                    <br>
                    {{ message2 }}
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"
import router from "../router"

export default {
    name: "Create",
    data () {
        return {
            players : [],
            playersNames: [],
            query : "",
            result : "",
            message : "",
            user : {
                name: "",
                avatar: ""
            },
            message2 : "",
            gameName : ""
        }
    },
    methods: {
        search: async function() {
            this.message = ""
            if(this.query == ""){
                return
            }
            if(this.players.length > 5) {
                this.message = "Only 6 players per game"
                return
            }
            let response = await axios.get('http://localhost:3000/api/user/search/' + this.query)
            console.log(response)
            if (response.status == 200) {
                this.result =  response.data
            }
            else {
                this.message = "User not found!"
            }
        },
        join: function() {
            this.message = ""
            this.players.push(this.result)
            this.playersNames.push(this.result.name)
            this.result = ""
            this.query = ""
        },
        getUserData: async function () {
            let response = await axios.get('http://localhost:3000/api/user')
            if (response.status == 200){
                console.log(response.data)
                this.query = response.data
                response = await axios.get('http://localhost:3000/api/user/search/' + this.query)
                console.log(response)
                if (response.status == 200) {
                    this.user =  response.data
                    this.query = ""
                }
                else {
                    this.message = "User not found!"
                }
                this.players.push(this.user)
                this.playersNames.push(this.user.name)
            }
        },
        remove: function(toRemove){
            this.players.splice(this.players.indexOf(toRemove), 1)
        },
        createGame: async function(){
            if(this.players.length == 1){
                this.message2 = "Please add more players"
                return
            }
            let playerNames = []
            this.players.forEach((player) => {
                playerNames.push(player.name)
            })
            let data = {
                name: this.gameName,
                players: playerNames,
                owner: this.user.name
            }
            let response = await axios.post('http://localhost:3000/api/game', data)
            if(response.status == 200){
                router.push({ path: 'game', query: {id: response.data._id}})
            }
            else{
                this.message2 = "Something went wrong."
            }
            console.log(response)
            
        }
    },
    mounted () {
        this.getUserData()
    }

}
</script>