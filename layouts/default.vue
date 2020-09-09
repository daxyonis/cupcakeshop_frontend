<template>
  <b-container fluid>  
    <b-nav align="right">
      <b-nav-item active><NuxtLink to="/">Home</NuxtLink></b-nav-item>
      <b-nav-item>About</b-nav-item>
      <b-nav-item>Contact</b-nav-item>
      <b-nav-item>
        <!-- <button class="snipcart-checkout flex items-center">
          <Cart />
          <span class="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
        </button> -->
      </b-nav-item>      
  </b-nav>  
    <Nuxt />
    <div hidden id="snipcart" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"></div>
  </b-container>
</template>
// <script>
// import Cart from "./icons/cart.vue"
// export default {
//     components: {
//         Cart
//     }
// }
// </script>
<style>
.container {
  padding-top: 20px;
}
</style>
