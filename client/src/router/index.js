import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios"
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"
import Register from "@/components/Register"
import Navigation from "@/components/Navigation"
import Create from "@/components/Create"
import Delete from "@/components/Delete"
import Continue from "@/components/Continue"
import Game from "@/components/Game"
import Account from "@/components/Account"

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
    component: Register,
    meta: { hideNavigation: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { hideNavigation: true }
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/delete",
    name: "Delete",
    component: Delete,
  },
  {
    path: "/continue",
    name: "Continue",
    component: Continue,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
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
