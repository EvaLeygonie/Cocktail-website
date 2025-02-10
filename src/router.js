import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import SearchResults from './views/SearchResults.vue'
import DrinkDetails from './views/DrinkDetails.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: SearchResults,
      path: '/search'
    },
    {
      component: DrinkDetails,
      path: '/details'
    }
  ]
})
