<template>
  <b-container fluid>  
    <b-nav align="right">
      <b-nav-item active><NuxtLink to="/">Home</NuxtLink></b-nav-item>
      <b-nav-item><NuxtLink to="/about">About</NuxtLink></b-nav-item>
      <b-nav-item>Contact</b-nav-item>
      <b-nav-item>
        <a class="snipcart-checkout">          
          <span class="snipcart-total-price font-weight-bold"></span>
        </a>
      </b-nav-item>      
  </b-nav>  
  <header class="bg-primary p-4">
    <h1 class="text-white">Cupcake Factory</h1>
    <h4><span class="color1">Eat.</span><span class="color2"> Smile.</span><span class="color3"> Repeat !</span></h4>
  </header>
    <Nuxt />
    <div hidden id="snipcart" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"></div>
  </b-container>
</template>

<style>
.container {
  padding-top: 20px;
}
.color1 {
  color:#FFD6EC;
}

.color2 {
  color:#FFC2E2;
}

.color3{
  color:#FFADD9;
}
</style>
