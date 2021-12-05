<template>
  <div class="headDivDetail">
    <span class="header_elems-btn"><router-link @click="clearDetail" to="/main"><img src="../assets/back.svg"
                                                                                     alt=""></router-link></span>
  </div>
  <div class="contentOrderDetail">

    <q-card v-for="(product, id) in detailProducts" :key="id" class="detailCard">
      <img :src="product.images">

      <q-card-section>
        <div class="text-h6">{{product.title}}</div>
        <div class="text-subtitle2">{{product.thumb}} кухня</div>
        <div class="text-subtitle2">{{product.price}} сом</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{product.description}}
      </q-card-section>
    </q-card>

    <div class="contentOrderDetail_btn">
      <div to="/main" class="div-nextSlide">
        <router-link to="/main">
          <button @click="clearDetail" class="btn-nextSlide">{{ $t ('orderBtn')}}</button>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "detail",
    data() {
      return {}
    },

    computed: {
      ...mapState({
        detailProducts: (state) => state.example.memory,

      }),
    },
    methods: {
      ...mapMutations({
        clearMem: 'example/CLEAR_MEM_ALL'
      }),
      clearDetail() {
        this.clearMem(this.product)
      }
    },
    // beforeDestroy() {
    //   this.clearDetail ()
    // }
  }
</script>

<style scoped>

</style>
