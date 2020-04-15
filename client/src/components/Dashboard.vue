
<template>
    <div>
        <h2>Risk!</h2>
        <p>Welcome {{ username }}!</p>
        <button class="btn btn-success" @click="createNewGame">Create New Game</button><br><br>
        <button class="btn btn-success" @click="continueNewGame">Continue Game</button><br><br>
        <button class="btn btn-danger" @click="deleteGame">Delete Game</button>
    </div>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
  name: "Dashboard",
  data () {
    return {
      username: ""
    }
  },
  methods: {
    getUserData: async function () {
      
      let response = await axios.get('http://localhost:3000/api/user')
      if (response.status == 200) {
        this.username =  response.data
      }
      else{
        router.push('/login')
      }
    },
    createNewGame: function() {
      router.push('/create')
    }
    ,
    continueNewGame: function() {
      router.push('/continue')
    },
    deleteGame: function() {
      router.push('/delete')
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>