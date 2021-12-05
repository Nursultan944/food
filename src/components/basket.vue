<template>
  <div class="foods">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="products.images"
        />
        <q-card-section class="basketInfo">
          {{ products.title}}
          <br>
          {{ products.category }}
          <br>
          {{ products.price }} сом
        </q-card-section>

      </q-card-section>

      <q-separator/>

      <q-card-actions class="basket_panel">
        <button @click="reduce" class="btnB">
          -
        </button>
        <div class="countDiv">
          {{products.quantity}}
        </div>
        <button @click="countAdd" class="btnB">
          +
        </button>

        <button class="del">
          <img @click.prevent="deleteProduct" class="delImg" src="../assets/del.svg" alt="">
        </button>
        <div class="totalPrice">{{products.totalPrice}} сом</div>
      </q-card-actions>
    </q-card>


  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  export default {
    name: "basket",
    props: {
      products: {
        type: Object,
        default() {
          return {}
        }
      }
    },

    data() {
      return {}
    },
    mounted() {


    },
    computed: {},
    methods: {

      ...mapMutations({
        delProductInBasket: 'example/DELETE_PRODUCT',
        addCount: 'example/ADD_COUNT',
        reduceI: 'example/REDUCE',

      }),
      deleteProduct() {
        this.delProductInBasket(this.products)
      },
      countAdd() {
        this.addCount(this.products)
      },
      reduce() {
        this.reduceI(this.products)
      },

    }
  }
</script>

<style scoped>

</style>
