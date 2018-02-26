import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'


import product from '@//view/product.vue'
import cart from '@//view/cart.vue'

import clothes from '@/view/clothes.vue'
import electronic from '@//view/electronic.vue'
import book from '@//view/book.vue'
import success from '@//view/success.vue'
import addressFill from '@//view/addressFill.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'list',
    //   component: list
    // },
    // {
    //   path: '/list',
    //   name: 'list',
    //   component: list
    // },
    {
      path: '/product/:key/:id',
      name: 'product',
      component: product
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: clothes
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/electronic',
      name: 'electronic',
      component: electronic
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/addressFill',
      name: 'addressFill',
      component: addressFill
    }
  ]
})
