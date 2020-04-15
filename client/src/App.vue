<template>
  <div id="app">
    <Navigation v-if="!$route.meta.hideNavigation"></Navigation>
    <br>
    <router-view/>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Navigation from './components/Navigation'
import Vue from 'vue'
import { 
  BNavbar, 
  BNavbarNav, 
  BNavbarBrand, 
  BNavbarToggle, 
  BNavItemDropdown,
  BNavItem,
  BDropdownItem,
  BDropdown,
  BDropdownForm,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BButton,
  BDropdownDivider,
  BDropdownItemButton,
  BContainer,
  BRow,
  BCol
} from 'bootstrap-vue'
import ColorPicker from 'vue-bootstrap-colorpicker'

Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-nav-item-dropdown', BNavItemDropdown)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-dropdown-item', BDropdownItem)
Vue.component('b-dropdown', BDropdown)
Vue.component('b-dropdown-form', BDropdownForm)
Vue.component('b-form-group', BFormGroup)
Vue.component('b-form-input', BFormInput)
Vue.component('b-form-checkbox', BFormCheckbox)
Vue.component('b-button', BButton)
Vue.component('b-dropdown-divider', BDropdownDivider)
Vue.component('b-dropdown-item-button', BDropdownItemButton)
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.component('color-picker', ColorPicker)
export default {
  name: 'app',
  components: { 
    'Navigation': Navigation,
    ColorPicker
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.avatar {
  width: 30px;
  border-radius: 50%;
}

#gameimg {
  position: absolute;
}

#gameboard{
  position: absolute;
  left: 0;
}
</style>
