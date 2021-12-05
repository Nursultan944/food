<template>
  <div class="foods">
    <div>
      <q-card class="my-card">
        <q-img src="">
          <img v-if="product.images" class="blockImg" :src="product.images" alt="">
          <img v-if="!product.images" class="blockImg" src="../assets/plov.jpg" alt="">
          <div class="absolute-bottom">
            <div class="text-h6">{{product.title}}</div>
            <div class="text-subtitle2">{{$t ('category')}}: {{product.category}}</div>
            <div class="text-subtitle2">{{$t ('kitchen')}} {{product.thumb}}</div>
          </div>
        </q-img>
        <q-card-actions class="card__actions">
          <q-btn class="btnC" flat>{{product.price}} сом</q-btn>
          <q-btn class="btnC" @click="addToCart" flat>{{$t ('Add_to_cart')}}</q-btn>
          <div>
            <router-link class="toDetail" to="/detail">
              <q-btn @click="addToMem" class="btnC" flat>{{$t ('more_details')}}</q-btn>
            </router-link>
          </div>
        </q-card-actions>
      </q-card>
    </div>


  </div>
</template>

<script>
  import {mapMutations,} from 'vuex';
  import detail from "./detail";

  export default {
    name: "foodBlock",
    components: {
      detail
    },
    props: {
      product: {
        type: Object
      }
    },

    data() {
      return {}
    },

    computed: {},
    methods: {
      ...mapMutations({
        addProductToBasket: 'example/ADD_PRODUCT',
        addProductToMem: 'example/DETAILS',

      }),
      addToCart() {
        this.addProductToBasket(this.product)
      },
      addToMem() {
        this.addProductToMem(this.product)


      }

    }

  }
</script>

<style scoped>

</style>
