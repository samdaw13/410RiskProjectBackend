
<template>
    <div>
        <h2>Dashboard</h2>
        <p>Name: {{ username }}</p>
        <form v-on:submit="logout">
            <input type="submit" value="Logout"/>
        </form>
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
      if (response.data) {
        this.username =  response.data
      }
      else{
        router.push('/login')
      }
      
      
    },
    logout: async function (e) {
      let response = await axios.get('http://localhost:3000/api/logout')
      console.log(response)
      router.push('/login')
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>