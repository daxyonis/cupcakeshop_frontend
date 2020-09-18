<template>
  <section>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-4">
      <div class="col mb-4" v-for="product in products" v-bind:key="product.id">
        <div class="card">
          <nuxt-link :to="`/products/${product.id}`">
            <b-img
              :src="storeUrl + product.image.url"
              rounded="circle"
              alt="Circle image"
              class="card-img-top"
            ></b-img>            
            <div class="card-body text-center">
              <h5 class="card-title">{{product.title}}</h5>
              <p class="card-text">{{product.description}}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    const res = await fetch(`${context.env.apiUrl}/products`);
    let products = await res.json();
    return {
      products: products,
      storeUrl: context.env.apiUrl,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration-line: none;
}
.card {
  border-color: transparent;
}
</style>
