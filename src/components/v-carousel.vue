<template>
  <div class="wrapper">
    <div class="v-carousel" :style="{'margin-left':'-' + (100 * currentSlideIndex) + '%' }">
      <v-carousel-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
    <div class="start-content">
      {{ $t ('slide_content') }}
    </div>
    <div class="btn-block">
      <div class="div-nextSlide1">
        <button class="btn-nextSlide" @click="nextSlide">{{ $t ('next')}}</button>
      </div>
      <div class="div-skipSlide">
        <router-link to="/login" class="btn-skip">{{ $t ('skip')}}</router-link>
      </div>
    </div>
    <div class="btn-language">
      <button class="language" @click="setLocale('en-EN')">EN</button>
      <button class="language" @click="setLocale('ru-RU')">RU</button>
    </div>
  </div>
</template>

<script>
  import vCarouselItem from '../components/v-carousel-item'

  export default {
    name: "v-carousel",
    data() {
      return {
        currentSlideIndex: 0
      }
    },
    components: {
      vCarouselItem
    },
    props: {
      carousel_data: {
        type: Array,
        default: () => []
      }
    },

    mounted() {
      this.$i18n.locale = 'en-EN'

    },

    methods: {
      nextSlide() {
        this.currentSlideIndex++

      },
      setLocale(lang) {
        this.$i18n.locale = lang
        localStorage.setItem('lang', lang)

      }
    },
    watch: {
      currentSlideIndex: function () {
        if (this.currentSlideIndex > 2) {
          this.$router.push('login')
        }
      }
    }

  }
</script>

<style lang="scss">


</style>
