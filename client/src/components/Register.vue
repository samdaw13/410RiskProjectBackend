<template>
    <div>
        <form class="register" @submit.prevent="register()">
            <h2>Register</h2>
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
              <button type="button" @click="register()">Register</button>
            </p>
            <p>
              {{ message }}
            </p>
        </form>
    </div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async register() {
      if (this.username == '' || this.password == ''){
        this.message = "Username and Password Required"
      }
      let data = {
        username: this.username,
        password: this.password
      }
      let response = await axios.post("http://127.0.0.1:3000/api/register", data)
      if (response.status == 200){
        router.push('/login')
      }
      else if(response.status == 204){
        this.message = "Username already in use. Please use another."
      }
      else{
        this.message = "Unable to create account."
      }
    }
  }
}
</script>