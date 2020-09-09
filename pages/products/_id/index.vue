<template>
<b-card no-body class="overflow-hidden mt-4 ml-4" style="max-width:540px;">
    <b-row no-gutters>
      <b-col md="6" lg="6">
          <b-img :src="product.image.url" rounded="circle" alt="Circle image" class="card-img-left"></b-img>
        <!-- <b-card-img :src="product.image.url" alt="Image" class="rounded-3"></b-card-img>         -->
      </b-col>
      <b-col md="6" lg="6">
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

    async asyncData( context ) {        
        const res = await fetch(`${context.env.apiUrl}/products/${context.params.id}`);
        let payload = await res.json();
        payload.image.url = context.env.apiUrl + payload.image.url;        
        return {
            product : payload,
            storeUrl: context.env.apiUrl
        }
    },

    computed: {
        customFields(){            
            if(this.product["Custom_field"].length > 0){
                return this.product["Custom_field"]
                    .map(({title, required, options}) => ({name: title, required, options}))
                    .map((x, index) => Object.entries(x)
                    .map(([key, value]) => ({[`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value})))
                    .reduce((acc, curr) => acc.concat(curr), [])
                    .reduce((acc, curr) => ({...acc, ...curr}))
            } else {
                return null;
            }        
        }
    }
    
}
</script>

<style scoped>
img {
    max-height: 200px;    
}

.card {
    border-color: transparent;
}

</style>