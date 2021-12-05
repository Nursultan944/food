<template>
  <div>
    <v-carousel :carousel_data="slideItems"/>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import vCarousel from '../components/v-carousel'

export default defineComponent({
  name: 'EssentialLink',
  components: {
    vCarousel
  },


  data () {
  return {
    slideItems: [
      {id: 1, name: 'img1', img: '1.png'},
      {id: 2, name: 'img2', img: '2.png'},
      {id: 3, name: 'img3', img: '3.png'}
    ]
  }
}
})
</script>
