<template>
  <div class="headDiv">
    <span class="header_elems-btn"><router-link to="/main"><img src="../assets/back.svg" alt=""></router-link></span>
  </div>
  <div class="contentOrder">
    <div class="contentOrder_firstPic"><img src="../assets/slide/orderPic.svg" alt=""></div>
    <div class="contentOrder_firstTitle">{{ $t ('order1')}}</div>
    <div class="contentOrder_secondTitle"> {{$t ('order2')}}</div>

    <div class="good">
      <img src="../assets/good2.svg" alt="">
    </div>
    <div class="contentOrder_btn">
      <div to="/main" class="div-nextSlide">
        <router-link to="/main">
          <button class="btn-nextSlide">{{ $t ('orderBtn')}}</button>
        </router-link>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "order"
  }
</script>

<style scoped>

</style>
