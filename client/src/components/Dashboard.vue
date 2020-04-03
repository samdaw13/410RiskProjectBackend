
<template>
    <div>
        <h2>Dashboard</h2>
        <p>Name: {{ user.name }}</p>
        <form v-on:submit="login">
            <input type="submit" value="Logout"/>
        </form>
    </div>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
  name: "Login",
  data () {
    return {
      user: {
        name: "Jesse"
      }
    }
  },
  methods: {
    getUserData: function () {
      let self = this
      console.log(self)
      axios.get("http://localhost:3000/players")
        .then((response) => {
          console.log(response)
          self.$set(this, "user", response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push("/")
        })
    },
    logout: function() {
        
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>