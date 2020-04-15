<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" @click="returnHome">Home</b-nav-item>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <img class="avatar" v-bind:src="avatar" alt='Avatar Image'>
          </template>
          <b-dropdown-item href="/account">Account</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="logout" >Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
  name: 'Navigation',
  data(){
    return {
      avatar: ''
    }
  },
  methods: {
    logout: async function (e) {
      let response = await axios.get('http://localhost:3000/api/logout')
      console.log(response)
      router.push('/login')
    },
    returnHome: function() {
      router.push('/')
    },
    getUserData: async function () {
      let response = await axios.get('http://localhost:3000/api/user/avatar')
      if (response.status == 200){
        console.log(response.data)
        this.avatar = response.data
      }
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>