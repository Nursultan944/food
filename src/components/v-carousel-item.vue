<template>
  <div class="v-carousel-item">
    <img :src=" require('../assets/slide/'+item_data.img)" alt="">
  </div>
</template>

<script>
  export default {
    name: "v-carousel-item",
    props: {
      item_data: {
        type: Object,
        default: () => {
        }
      }
    }
  }
</script>

<style lang="scss">


</style>
