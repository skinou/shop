<template>
  <div v-if="product" class="product">
    <div class="product-image">
      <img :src="product.image">
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <h3 v-show="product.key===1">{{product.country}} {{product.author}}</h3>
      <h2 class="product-cost">¥ {{ product.cost }}</h2>
      <h4 class="product-sale">销 量: {{ product.sales }}</h4>
      <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
    </div>
  </div>
  <!--<div class="product-desc">-->
  <!--<h2>产品介绍</h2>-->
  <!--<img v-for="n in 10" :key="n" :src="'http://ordfm6aah.bkt.clouddn.com/shop/' + n + '.jpeg'">-->
  <!--</div>-->
</template>

<script>
    import productData from '@/product'
    export default {
      name: 'product',
      data () {
        return {
          // 获取路由中的参数
          id: this.$route.params.id,
          product: null,
          key: parseInt(this.$route.params.key),
        }
      },
      methods: {
        getProduct () {
          // 真实环境通过 ajax 获取，这里用异步模拟
          setTimeout(() => {
            this.product = productData[this.key].find(item => item.id === this.id)
          }, 500)
        },
        // 加入购物车
        handleAddToCart () {
          this.$store.commit('addCart', this.product)
          this.$Message.success('添加成功');
        }
      },
      mounted () {
        console.log(productData)
        this.getProduct()
      }
    }
</script>

<style scoped>
  .product{
    margin: 32px;
    padding: 32px;
    background: #fff;
    border: 1px solid #dddee1;
    border-radius: 10px;
    height: 550px;
    width: 1000px;
    /*overflow: auto;*/

  }
  .product-image{
    width: 350px;
    /*height: 550px;*/
    /*float: left;*/
    margin: 0 0 0 0;
    text-align: center;
    float: left;
    /*display: inline;*/
  }
  .product-image img{
    width: 100%;
  }
  .product-info{
    width: 500px;
    /*float: left;*/
    margin: 0 0 0 30px;
    float: left;
    /*display: inline;*/
  }
  .product-cost{
    color: #f2352e;
    margin: 8px 0;
  }
  .product-add-cart{
    display: inline-block;
    padding: 8px 44px;
    margin: 8px 0;
    background: #2d8cf0;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .product-desc{
    background: #fff;
    margin: 32px;
    padding: 32px;
    border: 1px solid #dddee1;
    border-radius: 10px;
    text-align: center;
  }
  .product-desc img{
    display: block;
    width: 50%;
    margin: 32px auto;
    padding: 32px;
    border-bottom: 1px solid #dddee1;
  }
</style>
