<template>
  <router-view></router-view>
</template>

<script>

import EssentialLink from 'components/EssentialLink.vue'
import login from "components/login";
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink,
    login

  },

})
</script>
