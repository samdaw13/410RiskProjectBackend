import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios"
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"
import Register from "@/components/Register"

Vue.use(VueRouter)

const routes = [
  
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  let userIsLogged = await axios.get('http://localhost:3000/api/user')
  if ((to.name == "Login" || to.name == "Register") && userIsLogged.data != "") {
    // Redirect user to homepage
    return next({path: '/'})
  }
  // Let the user pass
  return next()
})


export default router
