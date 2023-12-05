import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "bootstrap-icons/font/bootstrap-icons.css"

import "./css/global.css"

import vSelect from "vue-select";

createApp(App).component("v-select", vSelect).use(store).use(router).mount('#app')
