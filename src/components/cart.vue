<template>
  <div>
    <div class="header">
      <div class="header_elems">
        <span class="header_elems-btn"><router-link to="/main"><img src="../assets/back.svg" alt=""></router-link></span>
        <div class="header_elems-text"> {{name}}</div>
        <span class="header_elems-pic"><img src="../assets/account_pic.svg" alt=""></span>

      </div>
      <div class="header_category">
        <p>{{$t ('your_basket')}}</p>
      </div>
      <div class="clearDiv">
        <q-btn @click="clearAll" flat class="clear_btn"   :label="$t ('clear')" />
      </div>
    </div>
    <div class="contentC">
      <div class="productItemDiv" v-for="(product, id) in basketProducts" :key="id">
        <basket :products="product"/>
      </div>
      <div class="empty" v-if="empty">
        {{$t ('empty')}}
        <img class="emptyImg" src="../assets/empty.svg" alt="">
      </div>
    </div>
    <div class="footerCart">
      <div class="footerCart_total">
        <div class="footerCart_total_text">{{ $t ('total')}}</div>
        <div :totalCount="totalCount"  class="footerCart_total_count">{{total}} сом</div>
      </div>
      <div  class="div-nextSlide">
        <router-link to="/confirm">
        <button :disabled="next" class="btn-nextSlide"  >{{ $t ('next')}}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import basket from "./basket";
  import order from "./order"
  import {mapMutations, mapState} from 'vuex'
    export default {
      name: "cart",
      components: {
        basket,
        order
      },
      data () {
        return {
          name: '',
          products: [],
          empty: false,
          next: false,

        }
      },
      methods: {
        ...mapMutations({
          allClear: 'example/CLEAR_ALL',
        }),
        setLocale(lang) {
          this.$i18n.locale = lang
          localStorage.setItem('lang', lang)
        },
        clearAll () {
          this.allClear(this.products)
          this.next = true
        }
      },
      computed: {
        ...mapState({
          basketProducts: (state) => state.example.productsInBasket,
          total () {
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
            this.next = true
          }
      },
      watch: {
        total () {
         if (this.basketProducts.length < 1) {
            this.empty = true
           this.next = true
          }
        }
      }

    }
</script>

<style scoped>

</style>
