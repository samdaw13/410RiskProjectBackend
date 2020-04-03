<template>
    <div>
        <h2>Register</h2>
        <form v-on:submit="register">
            <input type="text" name="username"/><br>
            <input type="password" name="password"/><br>
            <input type="submit" value="register"/>
        </form>
    </div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Register",
  methods: {
    register: (e) => {
      e.preventDefault()
      let username = e.target.elements.username.value
      let password = e.target.elements.password.value
      let register = () => {
        let data = {
          username: username,
          password: password
        }
        axios.post("http://127.0.0.1:3000/register", data)
          .then((response) => {
            console.log("Registered")
            router.push("/login")
          })
          .catch((errors) => {
            console.log("Cannot register in")
          })
      }
      register()
    }
  }
}
</script>