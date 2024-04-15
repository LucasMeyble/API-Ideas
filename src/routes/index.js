import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Hotel from '../views/Hotel.vue'
import Tier1 from '../views/Tier1.vue'


const routes = [
  {path: '/', name: "home", component: Home},
  {path: '/tier1', name: "tier1", component: Tier1},
  {path: '/hotel', name: "hotel", component: Hotel},
  

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router
