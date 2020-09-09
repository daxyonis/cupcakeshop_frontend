<template>
<div>
  <header class="bg-primary p-4">
    <h1 class="text-white">Cupcake Factory</h1>
    <h4><span class="color1">Eat.</span><span class="color2"> Smile.</span><span class="color3"> Repeat !</span></h4>
  </header>
  <section>
    <b-row class="pt-4"> 
      <b-col></b-col>
        <b-col cols="8">
          <div class="card-deck">            
              <div class="card"
                v-for="product in products"
                v-bind:key="product.id">
                <nuxt-link :to="`/products/${product.id}`">
                  <b-img :src="storeUrl + product.image.url" rounded="circle" alt="Circle image" class="card-img-top"></b-img>
                  <!-- <img :src="storeUrl + product.image.url" class="card-img-top" :alt="product.alt"> -->
                  <div class="card-body text-center">
                    <h5 class="card-title">{{product.title}}</h5>              
                    <p class="card-text">
                      {{product.description}}
                    </p>                
                  </div>
                </nuxt-link>
              </div>
          </div>
        </b-col>
        <b-col></b-col>
    </b-row>
    </section>
</div>
</template>

<script>
export default {  
  async asyncData( context ){
    const res = await fetch(`${context.env.apiUrl}/products`)
    let products = await res.json()
    return {
      products : products,
      storeUrl : context.env.apiUrl
    }
  }

}
</script>

<style scoped>
.color1 {
  color:#FFD6EC;
}

.color2 {
  color:#FFC2E2;
}

.color3{
  color:#FFADD9;
}
a {
  text-decoration-line: none;
}
.card{
  border-color: transparent;
}
</style>
