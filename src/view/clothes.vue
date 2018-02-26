<template>
  <clothesList :clothesList="clothes"></clothesList>
</template>

<script>
  import clothesList from '@/components/list/clothse-list'
    export default {
      name: 'clothes',
      components: {
        clothesList
      },
      computed: {
        clothes() {
          return this.$store.state.clothesList
        }
      },
      // created () {
      //   console.log(JSON.parse(JSON.stringify(this.clothesList)))
      // },
      mounted () {
        this.$store.dispatch('getClothesList')
      }
    }
</script>

<style scoped>

</style>
