<template>
<b-card no-body class="overflow-hidden mt-4">
    <b-row no-gutters>
      <b-col md="3" lg="2">
        <b-card-img :src="product.image.url" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="9" lg="10">
        <b-card-body :title="product.title">
          <b-card-text>
            {{product.description}}
          </b-card-text>
          <button 
            class="snipcart-add-item bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            :data-item-id="product.id"
            :data-item-price="product.price"
            :data-item-url="`${storeUrl}${this.$route.fullPath}`"
            :data-item-description="product.description"
            :data-item-image="product.image.url"
            :data-item-name="product.title"
            v-bind="customFields">
            Add to cart
        </button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {    

    data(){
        
    },

    async asyncData( context ) {
        console.log(`${context.env.apiUrl}/products/${context.params.id}`);
        const res = await fetch(`${context.env.apiUrl}/products/${context.params.id}`);
        let payload = await res.json();
        payload.image.url = context.env.apiUrl + payload.image.url;
        console.log(payload);
        return {
            product : payload,
            storeUrl: context.env.apiUrl
        }
    }
    
}
</script>

<style scoped>
img {
    max-height: 200px;    
}

</style>