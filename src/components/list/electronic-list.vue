<template>
  <div v-show="electronicList.length"  class="content">
    <div class="list-control">
      <div class="list-control-filter">
        <span>品牌：</span>
        <span
          class="list-control-filter-item"
          :class="{on: item === filterBrand}"
          v-for="item in brands"
          :key="item"
          @click="handleFilterBrand(item)">{{ item }}</span>
      </div>
      <div class="list-control-filter">
        <span>类别：</span>
        <span
          class="list-control-filter-item"
          :class="{on: item === filterClassifications}"
          v-for="item in classifications"
          :key="item"
          @click="handleFilterClassifications(item)">{{ item }}</span>
      </div>
      <div class="list-control-order">
        <span>排序：</span>
        <span
          class="list-control-order-item"
          :class="{on: order === ''}"
          @click="handleOrderDefault">默认</span>
        <span
          class="list-control-order-item"
          :class="{on: order === 'sales'}"
          @click="handleOrderSales">
                    销量
                    <template v-if="order === 'sales'">↓</template>
                </span>
        <span
          class="list-control-order-item"
          :class="{on: order.indexOf('cost') > -1}"
          @click="handleOrderCost">
                    价格
                    <template v-if="order === 'cost-asc'">↑</template>
                    <template v-if="order === 'cost-desc'">↓</template>
                </span>
      </div>
    </div>
    <div class="product-list">
      <Product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></Product>
      <div class="product-not-found" v-show="!filteredAndOrderedList.length">暂无相关商品</div>
    </div>
  </div>
</template>

<script>
  import Product from '@/components/product.vue'
    export default {
      name: 'electronic',
      components: {
        Product
      },
      props: {
        electronicList: Array
      },
      computed: {
        brands () {
          return this.$store.getters.electronicBrands
        },
        classifications () {
          return this.$store.getters.electronicClassifications
        },
        filteredAndOrderedList () {
          let list = [...this.electronicList]
          if (this.filterBrand !== '') {
            list = list.filter(item => item.brand === this.filterBrand)
          }
          if (this.filterClassifications !== '') {
            list = list.filter(item => item.classification === this.filterClassifications)
          }
          // 排序
          if (this.order !== '') {
            if (this.order === 'sales') {
              list = list.sort((a, b) => b.sales - a.sales)
            } else if (this.order === 'cost-desc') {
              list = list.sort((a, b) => b.cost - a.cost)
            } else if (this.order === 'cost-asc') {
              list = list.sort((a, b) => a.cost - b.cost)
            }
          }
          return list
        }
      },
      // created () {
      //   this.electronicsData = this.electronicList
      // },
      data () {
        return {
          filterBrand: '',
          filterColor: '',
          filterClassifications: '',
          order: '',
          electronicsData: []
        }
      },
      methods: {
        handleFilterBrand (brand) {
          if (this.filterBrand === brand) {
            this.filterBrand = ''
          } else {
            this.filterBrand = brand
          }
        },
        handleFilterClassifications (classification) {
          if (this.filterClassifications === classification) {
            this.filterClassifications = ''
          } else {
            this.filterClassifications = classification
          }
        },
        handleOrderDefault () {
          this.order = ''
        },
        handleOrderSales () {
          this.order = 'sales'
        },
        handleOrderCost () {
          if (this.order === 'cost-desc') {
            this.order = 'cost-asc'
          } else {
            this.order = 'cost-desc'
          }
        }
      },
      // mounted () {
      //   this.$store.dispatch('getClothesList')
      // }
    }
</script>

<style scoped>
  .list-control{
    background: #fff;
    border-radius: 6px;
    margin: 0 0 16px 16px;
    padding: 0 0 16px 16px;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    width: 1050px;
  }
  .list-control-filter{
    margin-bottom: 16px;
  }
  .list-control-filter-item,
  .list-control-order-item {
    cursor: pointer;
    display: inline-block;
    border: 1px solid #e9eaec;
    border-radius: 4px;
    margin-right: 6px;
    padding: 2px 6px;
  }
  .list-control-filter-item.on,
  .list-control-order-item.on{
    background: dodgerblue;
    border: 1px solid dodgerblue;
    color: #fff;
  }
  .product-not-found{
    text-align: center;
    padding: 32px;
  }
  .product-list{
    text-align: center;
    overflow: auto;
    width: 1085px;
  }
  .content{
    /*overflow-x: auto;*/
  }
</style>
