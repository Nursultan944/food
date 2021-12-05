<template>
    <ul class="">
        <li><div>{{$t ('nameProduct')}}</div>..........<div>{{products.title}}</div></li>
        <li><div>{{$t ('quantity')}}</div>..........<div>{{products.quantity}}</div></li>
        <li><div>{{$t ('price')}}</div>..........<div>{{products.price}}</div> сом</li>
        <li><div>{{$t ('totalPrice')}}</div>..........<div>{{products.totalPrice}}</div> сом</li>
    </ul>
</template>

<script>
    export default {
        name: "productOrder",
      props: {
          products: {
            type: Object,
            default () {
              return {}
            }
          }
      }
    }
</script>

<style scoped>

</style>
