const mongoose = require("mongoose");
//const playerSchema = require("./players").playerSchema
let territories = require('../assets/territories').territories
let territoryNames = require('../assets/territories').territoryNames
let regions = require('../assets/regions')

var gameSchema = new mongoose.Schema({
    name: String,
    players: {
        type: [String]
    },
    owner: String,
    territories: {
        type: [],
        name: String,
        adjacent: {
            type: [String]
        },
        owner: String,
        troopCount: Number,
        region: String,
        isFort: Boolean,
        coordinates: {
            x: Number,
            y: Number
        }
    },
    regions: {
        type: [],
        name: String,
        owner: String,
        value: Number
    },
    currentTurn: String
})

gameSchema.statics.create = function(name, players, owner){
    assignTerritories(players)
    const game = new Games({
        name: name,
        players: players,
        owner: owner,
        territories: territories,
        regions: regions,
        currentTurn: players[Math.floor(Math.random()*players.length)]
    })
    return game.save()
}

gameSchema.statics.get = async function(id){
    const users = await Games.findById(id)
    return users
}

gameSchema.statics.getAll = async function() {
    const games = await Games.find()
    return games
}

gameSchema.statics.delete = async function(id){
    const response = await Games.findByIdAndDelete(id)
    return response
}

function assignTerritories (players)
{
	//Shuffles territories
    // switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
        // Shuffle territory names
        var location1 = Math.floor((Math.random() * territoryNames.length));
		var location2 = Math.floor((Math.random() * territoryNames.length));
        // Switch their position
        var tmp = territoryNames[location1];
        
		territoryNames[location1] = territoryNames[location2];
		territoryNames[location2] = tmp;
    }
    
    
    //Deals territories to players
    var i = 0
    while(i < territoryNames.length){
        for (var j = 0; j < players.length; j++){
            if(territories[territoryNames[i]]){
                territories[territoryNames[i]].owner = players[j] 
                i++
            }
            else{
                break
            }
        }
    }  
    let startingTroops = 0
    switch(players.length){
        case 2:
            startingTroops = 60
            break;
        case 3:
            startingTroops = 52
            break;
        case 4:
            startingTroops = 45
            break;
        case 5:
            startingTroops = 37
            break;
        case 6:
            startingTroops = 30
            break;
    }
    
    for(var i = 0; i < players.length; i++){
        let playerTroops = startingTroops
        let countFinish = false
        while(!countFinish){
            for (var j = 0; j < territoryNames.length; j ++){
                if(territories[territoryNames[j]].owner == players[i]){
                    territories[territoryNames[j]].troopCount++
                    playerTroops--
                }
                if(playerTroops == 0){
                    countFinish = true;
                    break
                }
            }
        }
    }

}


const Games = mongoose.model('Games', gameSchema);
module.exports = Games;

