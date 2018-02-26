<template>
  <electronicList :electronicList="electronic"></electronicList>
</template>

<script>
  import electronicList from '@/components/list/electronic-list'
    export default {
      name: 'electronic',
      components: {
        electronicList
      },
      computed: {
        electronic() {
          return this.$store.state.electronicList
        }
      },
      created () {
        console.log(JSON.parse(JSON.stringify(this.electronic)))
      },
      mounted () {
        this.$store.dispatch('getElectronicList')
      }
    }
</script>

<style scoped>

</style>
