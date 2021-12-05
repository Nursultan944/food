<template>
  <div>
    <div class="header">
      <div class="header_elems">
        <span class="header_elems-pic"><img src="../assets/account_pic.svg" alt=""></span>
        <div class="header_elems-text">{{$t('hello')}} {{name}}</div>
<!--        <span class="header_elems-btn"><button><img src="../assets/header_btn.svg" alt=""></button></span>-->
      </div>
      <div class="header_input">


        <input v-model="searchProduct" type="text" class="header_input-input" :placeholder="$t ('search')">
      </div>
      <div class="header_category">
        <p>{{$t ('category')}}</p>
        <div class="header_category_buttons">
          <div class="header_category_buttons-elem">
            <button @click="setCurrentCategory('all')">{{$t ('all')}}</button>
          </div>
          <div class="header_category_buttons-elem">
            <button @click="setCurrentCategory('breakfast')">{{$t ('breakfast')}}</button>
          </div>
          <div class="header_category_buttons-elem">
            <button @click="setCurrentCategory('lunch')">{{$t ('lunch')}}</button>
          </div>
          <div class="header_category_buttons-elem">
            <button @click="setCurrentCategory('dinner')">{{$t ('dinner')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="productItemDiv" v-for="product in filterFoodsBreakfast " :key="product.id">
        <foodBlock v-if="cat" :product="product"/>
      </div>
      <div class="productItemDiv" v-for="product in filterSearch" :key="product.id">
        <foodBlock v-if="search" :product="product"/>
      </div>
    </div>
    <div class="footer">
      <div class="footer_home">
        <router-link to="/main"><img src="../assets/icon_home.svg" alt=""></router-link>
      </div>
      <div class="footer_liked">
        <button @click="check"><img src="../assets/icon_liked.svg" alt=""></button>
      </div>
      <div class="footer_main">
        <div v-if="minBasket" class="countFirst"><span class="countFirst-sp">{{totalCount}}</span></div>
        <router-link to="/cart" class="footer_main-btn"><img src="../assets/cart.svg" alt=""></router-link>
      </div>
      <div class="footer_time">
        <button><img src="../assets/icon_time.svg" alt=""></button>
      </div>
      <div class="footer_notification">
        <router-link to="/"><img src="../assets/icon_notification.svg" alt=""></router-link>
      </div>
    </div>
  </div>

</template>

<script>

  import foodBlock from "./foodBlock";
  import cart from "./cart";
  import detail from "./detail";
  import {defineComponent} from "vue";
  import {mapMutations, mapActions, mapGetters, mapState} from 'vuex';

  export default {
    name: "main",

    components: {
      foodBlock,
      cart,
      detail
    },
    data() {
      return {
        name: '',
        currentCategory: '',
        searchProduct: '',
        cat: true,
        search: false,
        minBasket: false
      }
    },
    mounted() {
      if (localStorage.userEmail) {
        this.name = localStorage.userEmail
        }

    },

    created() {
      this.actionProduct()
     if(this.basketProducts.length >= 1) {
        this.minBasket= true
      }

    },


    methods: {
      ...mapActions({
        actionProduct: 'example/GET_PRODUCT'
      }),

      setCurrentCategory(value) {
        this.currentCategory = value
      },
      check () {
        console.log(this.basketProducts.length)
      }

    },
    computed: {
      products () {
        return this.$store.getters["example/PRODUCTS_GETTER"]

      },

      ...mapState({
          basketProducts: (state) => state.example.productsInBasket,
          totalCount () {
            let total = 0
            for (let item of this.basketProducts) {
              total += item.quantity
            }
            return total.toFixed(0);
          },
        }),
      filterSearch () {
        if (this.searchProduct.length > 0) {
          this.cat = false;
          this.search = true;
        return this.products.filter(product => {
          return product.title.toUpperCase().indexOf(this.searchProduct.toUpperCase()) !==-1
        })


      } else if (this.searchProduct.length ===0) {
            this.cat = true;
            this.search = false;
        }},
      filterFoodsBreakfast() {

        if (this.currentCategory === '' || this.currentCategory === 'all') {
          return this.products
        }
        else {
          return this.products.filter((product) => {
            return product.category === this.currentCategory
          })
        }

      }

    },
    watch: {
      totalCount () {
        if (this.basketProducts.length > 0){
          this.minBasket= true
        } else if (this.basketProducts.length < 1) {
          this.minBasket= false
        }
      }
    }

  }
</script>

<style scoped>

</style>
