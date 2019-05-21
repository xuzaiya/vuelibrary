// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import axios from 'axios'
import App from './App'
import Book from './components/Book'
import AddBook from './components/AddBook'
import DetailBook from './components/Detailbook'
import ModifyBook from './components/ModifyBook'



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)


//Vue.prototype.$http = axios
//配置路由
const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Book},
    {path:'/addbook',component:AddBook},
    {path:'/detailBook/:id',component:DetailBook},
    {path:'/modify/:id',component:ModifyBook},


  ]

})



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
