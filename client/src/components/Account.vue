<template>
    <div>
        <b-dropdown id="dropdown-form" text="Change your Avatar" variant="primary" ref="dropdown" class="m-2">
            <b-dropdown-form>
                <b-form-group label="Change Avatar" label-for="change-avatar" @submit.stop.prevent>
                    <b-form-input
                        id="change-avatar"
                        size="sm"
                        placeholder="Enter URL here"
                        v-model="newAvatar"
                    ></b-form-input>
                </b-form-group>

                <b-button variant="primary" size="sm" @click="changeAvatar">Change</b-button>
                
            </b-dropdown-form>
        </b-dropdown>
    </div>
</template>
<script>
import axios from "axios"
import router from "../router"
export default {
  name: 'Account',
  data(){
    return {
      avatar: '',
      newAvatar: ''
    }
  },
  methods: {
    getUserData: async function () {
      let response = await axios.get('http://localhost:3000/api/user/avatar')
      if (response.status == 200){
        console.log(response.data)
        this.avatar = response.data
      }
    },
    changeAvatar: async function(){
        let user = await axios.get('http://localhost:3000/api/user')
        let data = {
            username: user.data,
            avatar: this.newAvatar
        }
        let response = await axios.post('http://localhost:3000/api/user/avatar', data)
        if(response.status == 200){
            this.avatar = response.data
        }
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>