<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-home"></Icon>
              <router-link to="/clothes"class="top">首页</router-link>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="android-cart" ></Icon>
              <router-link to="/cart" class="top">
                购物车
                <span v-if="cartList.length">{{ cartList.length }}</span>
              </router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}" width="210">
          <Menu active-name="item-clothes" theme="light" width="auto" :open-names="['item']">
            <Submenu name="item">
              <template slot="title">
                <Icon type="navicon-round"></Icon>
                分类
              </template>
              <!--<MenuItem name="item-all">-->
                <!--<router-link to="/all" class="link">首页</router-link>-->
              <!--</MenuItem>-->
              <MenuItem name="item-clothes">
                <router-link to="/clothes" class="link">衣服</router-link>
              </MenuItem>
              <MenuItem name="item-book">
                <router-link to="/book" class="link">图书</router-link>
              </MenuItem>
              <MenuItem name="item-electronic">
                <router-link to="/electronic" class="link">电子产品</router-link>
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff', overflowX: 'auto'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    this.$router.push('/clothes')
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
  .link{
    display: block;
    width: 100%;
    height: 100%;
    color: black;
  }
  .top{
    color: white;
  }
</style>
