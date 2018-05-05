import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import SoundsLike from '@/components/SoundsLike'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/soundslike',
      name: 'SoundsLike',
      component: SoundsLike
    }    
  ]
})
