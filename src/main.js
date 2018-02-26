// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';
import productData from './product'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(iView)


function getFilterArray (array) {
  const res = []
  const json = {}
  for (let i = 0; i < array.length; i++) {
    const _self = array[i]
    if (!json[_self]) {
      res.push(_self)
      json[_self] = 1
    }
  }
  return res
}


const store = new Vuex.Store({
  state: {
    clothesList: [],
    bookList: [],
    electronicList: [],
    cartList: []
  },
  getters: {
    clothesBrands: state => {
      const clothesBrands = state.clothesList.map(item => item.brand)
      return getFilterArray(clothesBrands)
    },
    clothesColors: state => {
      const clothesColors = state.clothesList.map(item => item.color)
      return getFilterArray(clothesColors)
    },
    clothesClassifications: state => {
      const clothesClassifications = state.clothesList.map(item => item.classification)
      return getFilterArray(clothesClassifications)
    },
    bookAuthors: state => {
      const bookAuthors = state.bookList.map(item => item.author)
      return getFilterArray(bookAuthors)
    },
    bookCountries: state => {
      const bookCountries = state.bookList.map(item => item.country)
      return getFilterArray(bookCountries)
    },
    bookClassifications: state => {
      const bookClassifications = state.bookList.map(item => item.classification)
      return getFilterArray(bookClassifications)
    },
    electronicBrands: state => {
      const clothesBrands = state.electronicList.map(item => item.brand)
      return getFilterArray(clothesBrands)
    },
    electronicClassifications: state => {
      const electronicClassifications = state.electronicList.map(item => item.classification)
      return getFilterArray(electronicClassifications)
    },
  },
  mutations: {
    // 添加商品列表
    setClothesList (state, data) {
      state.clothesList = data
    },
    setBookList (state, data) {
      state.bookList = data
    },
    setElectronicList (state, data) {
      state.electronicList = data
    },
    // 添加到购物车
    addCart (state, object) {
      // 先判断购物车是否已有，如果有，数量+1
      const isAdded = state.cartList.find(item => item.id === object.id)
      if (isAdded) {
        isAdded.count++
      } else {
        state.cartList.push({
          id: object.id,
          name: object.name,
          cost: object.cost,
          img: object.image,
          key: object.key,
          count: 1
        })
      }
    },
    // 修改商品数量
    editCartCount (state, payload) {
      const product = state.cartList.find(item => item.id === payload.id)
      product.count += payload.count
    },
    // 删除商品
    deleteCart (state, id) {
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    },
    // 清空购物车
    emptyCart (state) {
      state.cartList = []
    }
  },
  actions: {
    // 请求商品列表
    getClothesList (context) {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setClothesList', productData[0])
      }, 500)
    },
    getBookList (context) {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setBookList', productData[1])
      }, 500)
    },
    getElectronicList (context) {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setElectronicList', productData[2])
      }, 500)
    },
    // 购买
    buy (context) {
      // 真实环境应通过 ajax 提交购买请求后再清空购物列表
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
