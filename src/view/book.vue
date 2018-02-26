<template>
  <bookList :bookList="books"></bookList>
</template>

<script>
  import bookList from '@/components/list/book-list'
    export default {
        name: 'book',
      components: {
        bookList
      },
      computed: {
        books() {
          return this.$store.state.bookList
        }
      },
      // created () {
      //   console.log(JSON.parse(JSON.stringify(this.clothesList)))
      // },
      mounted () {
        this.$store.dispatch('getBookList')
      }
    }
</script>

<style scoped>

</style>
