import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBase from '../views/MainBase.vue'
import MainInicio from '../views/Inicio/MainInicio.vue'
import AboutView from '../views/AboutView.vue'
import EditView from '../views/Inicio/EditView.vue'
import ListView from '../views/Inicio/ListView.vue'
import Historial from '../views/Inicio/Historial.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainBase,
    children: [
      {
        path: '/home/inicio',
        name: 'MainInicio',
        component: MainInicio
      },
      { /* Se agrega la ruta de la nueva vista */
        path: '/home/inicio/about',
        name: 'AboutView',
        component: AboutView
      },
      { /* Se agrega la ruta de la nueva vista */
      path: '/home/inicio/edit',
      name: 'EditView',
      component: EditView
    },
      { /* Se agrega la ruta de la nueva vista */
      path: '/home/inicio/List',
      name: 'ListView',
      component: ListView
    },
    { /* Se agrega la ruta de la nueva vista */
      path: '/home/inicio/Historial',
      name: 'Historial',
      component: Historial
    }
    ] 
  }
]

const router = new VueRouter({
  routes
})

export default router
