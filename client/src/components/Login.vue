<template>
  <form class="login" @submit.prevent="login()">
    <h2>Login</h2>
    <p>
      <label>
        <span>Username: </span>
        <input type="string" v-model="username">
      </label>
    </p>
    <p>
      <label>
        <span>Password: </span>
        <input type="password" v-model="password">
      </label>
    </p>
    <p>
      <button class="btn btn-success" type="button" @click="login()">Login</button>
    </p>
    <router-link :to="{ name: 'Register'}">New? Click here to Register</router-link>
    <p>
      {{ message }}
    </p>
  </form>
  
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async login() {
      if (this.username == '' || this.password == ''){
        this.message = "Username and Password Required"
      }
      let data = {
        name: this.username,
        password: this.password
      }
      let response = await axios.post("http://localhost:3000/api/login", data)
      if (response.status == 200){
        //Vue.$cookies.set("username", response.data)
        router.push({
          path: '/'
        })
      }
      else{
        this.message = "Inccorect username or Password"
      }
        
    
    }
  }
}
</script>