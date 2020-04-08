const { expect } = require('chai')
const server = require('../index.js/index.js');
const axios = require('axios')
describe('Test Risk server works', () => {
    let nodeServer
    before('Start the server', () => {
        nodeServer = server(3000)
        return nodeServer
    })

    describe('Test the /game requests', () => {
        it('Test getGames', async() => {
            expected = [
                {
                    "gameID": 1,
                    "name": "string",
                    "players": 
                    [
                        {
                            "id": 1,
                            "name": "string",
                            "avatar": "string",
                            "password": "string"
                        }
                    ]
                }
            ]
            const res = await axios.get('http://localhost:3000/games')
            expect(res.data).to.eql(expected)
        })
        it('Test postGame', async() => {
            expected = {
                "gameID": 1,
                "name": "string",
                "players": 
                [
                    {
                        "id": 1,
                        "name": "string",
                        "avatar": "string",
                        "password": "string"
                    }
                ]
            }
            const res = await axios.post('http://localhost:3000/games')
            expect(res.data).to.eql(expected)
            
        })
        it('Test getGame', async() => {
            expected = {
                "gameID": 1,
                "name": "string",
                "players": 
                [
                    {
                        "id": 1,
                        "name": "string",
                        "avatar": "string",
                        "password": "string"
                    }
                ]
            }
            const res = await axios.get('http://localhost:3000/games/1')
            expect(res.data).to.eql(expected)
            
        })
        it('Test getGamesPlayers', async() => {
            expected = [
                {
                    "id": 1,
                    "name": "string",
                    "avatar": "string",
                    "password": "string"
                }
            ]
            
            const res = await axios.get('http://localhost:3000/games/1/players')
            expect(res.data).to.eql(expected)
            
        })
        it('Test addPlayerToGame', async() => {
            expected = {
                "id": 1,
                "name": "string",
                "avatar": "string",
                "password": "string"
            }
            
            const res = await axios.put('http://localhost:3000/games/1/players/1/', expected)
            expect(res.data).to.eql(expected)
            
        })
    })

    after(async () => {
        const res = await nodeServer
        res.stop()
    })
})