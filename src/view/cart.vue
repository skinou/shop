<template>
 <div>
   <h1 class="step">商品确认</h1>
     <div class="progress">
       <Steps :current="0">
         <Step title="商品确认"></Step>
         <Step title="填写信息"></Step>
         <Step title="提交成功"></Step>
       </Steps>
     </div>

   <div class="cart">
     <Table border :columns="columns" :data="cartList"></Table>
     <div class="cart-footer" v-show="cartList.length">
       <div class="cart-footer-desc">
         共计 <span>{{ countAll }}</span> 件商品
       </div>
       <div class="cart-footer-desc">
         应付总额 <span>¥ {{ costAll }}</span>
       </div>
       <div class="cart-footer-desc">
         <router-link to="/addressFill"><Button type="primary" size="large">下一步</Button></router-link>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
    // import productData from '@/product'
    export default {
      name: 'cart',
      computed: {
        cartList () {
          return this.$store.state.cartList
        },
        // productDictList () {
        //   const dict = {}
        //   this.productList.forEach(item => {
        //     dict[item.id] = item
        //   })
        //   return dict
        // },
        countAll () {
          let count = 0
          this.cartList.forEach(item => {
            count += item.count
          })
          return count
        },
        costAll () {
          let cost = 0
          this.cartList.forEach(item => {
            cost += item.cost * item.count
          })
          return cost
        }
      },
      data () {
        return {
          // productList: productData,
          promotionCode: '',
          promotion: 0,
          columns: [
            {
              title: '商品信息',
              key: 'info',
              width: 550,
              render: (h,params) => {
                return h('div',[
                  h('img',{
                    style: {
                      display: 'inline-block',
                      width: '35px',
                      height: '40px',
                      position: 'relative',
                      top: '2px'
                    },
                    attrs: {
                      src: params.row.img
                    }
                  }),
                  h('router-link',{
                    style: {
                      display: 'inline-block',
                      marginLeft: '15px',
                      position: 'relative',
                      width: '450px',
                      top: '-10px'
                    },
                    attrs: {
                      to: '/product/'+ params.row.key +'/'+ params.row.id
                    }
                  },params.row.name)
                ])
              }
            },
            {
              title: '单价',
              key: 'cost',
              align: 'center'
            },
            {
              title: '数量',
              key: 'count',
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('span', {
                    style: {
                      display: 'inline-block',
                      margin: '0 4px',
                      width: '24px',
                      height: '24p',
                      lineHeight: '22px',
                      textAlign: 'center',
                      background: '#f8f8f9',
                      borderRadius: '50%',
                      boxShadow: '0 1px 1px rgba(0,0,0,.2)',
                      cursor: 'pointer'
                    },
                    on: {
                      click: () => {
                        this.handleCount(params.index, -1)
                      }
                    }
                  }, '-'),
                  h('span',params.row.count),
                  h('span', {
                    style: {
                      display: 'inline-block',
                      margin: '0 4px',
                      width: '24px',
                      height: '24p',
                      lineHeight: '22px',
                      textAlign: 'center',
                      background: '#f8f8f9',
                      borderRadius: '50%',
                      boxShadow: '0 1px 1px rgba(0,0,0,.2)',
                      cursor: 'pointer'
                    },
                    on: {
                      click: () => {
                        this.handleCount(params.index, 1)
                      }
                    }
                  }, '+'),
                ]);
              }
            },
            {
              title: '小计',
              key: 'all',
              align: 'center',
              render: (h, params) => {
                return h('div',params.row.count * params.row.cost);
              }
            },
            {
              title: '删除',
              key: 'delete',
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                    },
                    on: {
                      click: () => {
                        this.handleDelete(params.index)
                      }
                    }
                  }, '删除'),
                ],);
              }
            },
          ],
        }
      },
      methods: {
        handleCount (index, count) {
          if (count < 0 && this.cartList[index].count === 1) {
            return
          } else {
            this.$store.commit('editCartCount', {
              id: this.cartList[index].id,
              count: count
            })
          }
        },
        handleDelete (index) {
          this.$store.commit('deleteCart', this.cartList[index].id)
          this.$Message.success('删除成功');
        },
        // handleCheckCode () {
        //   if (this.promotionCode === '') {
        //     window.alert('请输入优惠码')
        //     return
        //   }
        //   if (this.promotionCode !== 'Vue.js') {
        //     window.alert('优惠码验证失败')
        //   } else {
        //     this.promotion = 500
        //   }
        // },
        handleOrder () {
          this.$store.dispatch('buy').then(() => {
            window.alert('购买成功')
          })
        }
      }
    }
</script>

<style scoped>
  .progress{
    width: 900px;
    margin: 0 auto;
  }
  .cart{
    margin: 32px;
    background: #fff;
    border: 1px solid #dddee1;
    border-radius: 10px;
    width: 1000px;
  }
  .cart-header-main{
    padding: 8px 32px;
    overflow: hidden;
    border-bottom: 1px solid #dddee1;
    background: #eee;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }
  .cart-empty{
    text-align: center;
    padding: 32px;
  }
  .cart-header-main div{
    text-align: center;
    float: left;
    font-size: 14px;
  }
  .step{
    color: dodgerblue;
    margin: 10px 0 30px 50px;
    letter-spacing: 2px;
  }
  div.cart-info{
    width: 60%;
    text-align: left;
  }
  .cart-price{
    width: 10%;
  }
  .cart-count{
    width: 10%;
  }
  .cart-cost{
    width: 10%;
  }
  .cart-delete {
    width: 10%;
  }
  .cart-content-main{
    padding: 0 32px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px dashed #e9eaec;
    overflow: hidden;
  }
  .cart-content-main div{
    float: left;
  }
  .cart-content-main img{
    width: 40px;
    height: 40px;
    position: relative;
    top: 10px;
  }
  .cart-control-minus,
  .cart-control-add{
    display: inline-block;
    margin: 0 4px;
    width: 24px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #f8f8f9;
    border-radius: 50%;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    cursor: pointer;
  }
  .cart-control-delete{
    cursor: pointer;
    color: #2d8cf0;
  }
  .cart-promotion{
    padding: 16px 32px;
  }
  .cart-control-promotion,
  .cart-control-order{
    display: inline-block;
    padding: 8px 32px;
    border-radius: 6px;
    background: #2d8cf0;
    color: #fff;
    cursor: pointer;
  }
  .cart-control-promotion{
    padding: 2px 6px;
    font-size: 12px;
    border-radius: 3px;
  }
  .cart-footer{
    padding: 32px;
    text-align: right;
  }
  .cart-footer-desc{
    display: inline-block;
    padding: 0 16px;
  }
  .cart-footer-desc span{
    color: #f2352e;
    font-size: 20px;
  }
</style>
