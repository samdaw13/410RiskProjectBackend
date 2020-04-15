<template>
    <div>
        <img src="../assets/board.jpg" style="z-index:1" width="1900" alt="Game Board" class="gameimg" id="gameboard">
        <div v-for="territory in territories">
            
            <div v-if="territory.number == 1">
                <img  v-bind:src="image1src" v-bind:style="'position:absolute;left:' + territory.x + 'px;top:' + territory.y + 'px;border-radius: 50%;z-index:2'" width="60" alt="Game Board">
            </div>
            <div v-else-if="territory.number == 2">
                <img  v-bind:src="image2src" v-bind:style="'position:absolute;left:' + territory.x + 'px;top:' + territory.y + 'px;border-radius: 50%;z-index:2'" width="60" alt="Game Board">
            </div>
            <div v-else-if="territory.number == 3">
                <img  v-bind:src="image3src" v-bind:style="'position:absolute;left:' + territory.x + 'px;top:' + territory.y + 'px;border-radius: 50%;z-index:2'" width="60" alt="Game Board">
            </div>
            <div v-else-if="territory.number == 4">
                <img  v-bind:src="image4src" v-bind:style="'position:absolute;left:' + territory.x + 'px;top:' + territory.y + 'px;border-radius: 50%;z-index:2'" width="60" alt="Game Board">
            </div>
            <div v-else-if="territory.number == 5">
                <img  v-bind:src="image5src" v-bind:style="'position:absolute;left:' + territory.x + 'px;top:' + territory.y + 'px;border-radius: 50%;z-index:2'" width="60" alt="Game Board">
            </div>
            <div v-else-if="territory.number == 6">
                <img  v-bind:src="image6src" v-bind:style="'position:absolute;left:' + territory.x + 'px;top:' + territory.y + 'px;border-radius: 50%;z-index:2'" width="60" alt="Game Board">
            </div>
            <span v-bind:style="'color:white;font-weight:900;font-size:200%;position:absolute;left:' + territory.tx + 'px;top:' + territory.ty + 'px;z-index:3;transform: translate(-50%, -50%);'">{{territory.troopCount}}</span>    
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import router from "../router"
import image1 from "../assets/player1.png"
import image2 from "../assets/player2.png"
import image3 from "../assets/player3.png"
import image4 from "../assets/player4.png"
import image5 from "../assets/player5.png"
import image6 from "../assets/player6.png"

export default {
    name: 'Game',
    data() {
        return{
            game: {},
            territories: [],
            players: {},
            territoryNames : ["Forodwaith", "EasternAngmar", "Angmar", "Borderlands", "NorthDowns", "Fornost", "WeatherHills", "OldForest", "Buckland", "SouthDowns", "Rhudaur", "LuneValley", "EvendimHills", "TowerHills", "TheShire", "Mithlond", "Forlindon", "Harlindon", "NorthRhun", "SouthRhun", "WitheredHeath", "Esgaroth", "NorthMirkwood", "Carrock", "EasternMirkwood", "SouthMirkwood", "AnduinValley", "Eregion", "Dunland", "Minhiriath", "Enedwaith", "GapofRohan", "WestRohan", "Fangorn", "Moria", "GladdenFields", "Lorien", "TheWold", "EmynMuil", "BrownLands", "RhunHills", "DeadMarshes", "DruwaithIaur", "Anfalas", "Andrast", "ValeofErech", "Lamedon", "Belfalas", "Lebennin", "MinasTirith", "Ithilien", "SouthIthilien", "Udun", "MountDoom", "Baraddur", "Gorgoroth", "MinasMorgul", "Nurn", "Harondor", "Harad", "DeepHarad", "Umbar", "NearHarad", "Khand"],
            image1src : image1,
            image2src : image2,
            image3src : image3,
            image4src : image4,
            image5src : image5,
            image6src : image6
        }
    },
    methods: {
        getGame: async function() {
            let id = this.$route.query.id
            let response = await axios.get("http://localhost:3000/api/game?gameId=" + id)
            if(response.status == 200){
                this.game = response.data
            }
            let i = 1
            this.game.players.forEach(player => {
                
                this.players[player] = i
                i++
            });
            let territories = this.game.territories[0]
            
            this.territoryNames.forEach(territory => {
                console.log(territories[territory].coordinates)
                let tx = parseInt(territories[territory].coordinates.x) + 30
                let ty = parseInt(territories[territory].coordinates.y) + 30
                this.territories.push({
                    x: territories[territory].coordinates.x,
                    y: territories[territory].coordinates.y,
                    tx: tx.toString(),
                    ty: ty.toString(),
                    number: this.players[territories[territory].owner],
                    troopCount: territories[territory].troopCount
                })
            });
            
        }
    },
    mounted() {
        this.getGame()
    }
}
</script>