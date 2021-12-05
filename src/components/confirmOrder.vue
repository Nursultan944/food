<template>
  <div class="headDiv">
    <span class="header_elems-btn"><router-link to="/cart"><img src="../assets/back.svg" alt=""></router-link></span>
  </div>
  <div class="contentOrder">
    <div class="contentOrderConfirm_firstPic"><img src="../assets/slide/orderPic.svg" alt=""></div>
    <div class="contentOrderConfirm_firstTitle">{{ $t ('confirmTitle1')}}</div>
    <div v-for="(product, id) in basketProducts" :key="id" class="contentOrderConfirm_secondTitle">
      <productOrder :products="product"/>
    </div>
    <div class="contentOrder_btn">
      <div class="footerCart_total">
        <div class="footerCart_total_text">{{ $t ('total')}}</div>
        <div class="footerCart_total_count">{{total}} сом</div>
      </div>
      <div to="/order" class="div-nextSlide">
        <router-link to="/order">
          <button class="btn-nextSlide">{{ $t ('confirmOrder')}}</button>
        </router-link>
      </div>
    </div>
  </div>


</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import productOrder from "./productOrder";

  export default {
    name: "confirmOrder",
    components: {
      productOrder
    },
    computed: {
      ...mapState({
        basketProducts: (state) => state.example.productsInBasket,
        total() {
          let total = 0
          for (let item of this.basketProducts) {
            total += item.totalPrice
          }
          return total.toFixed(2);
        },
      }),
    },
    mounted() {
      console.log(this.basketProducts)

      if (this.basketProducts.length < 1) {
        this.empty = true
      }


    },


  }
</script>

<style scoped>

</style>
