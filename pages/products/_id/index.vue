<template>
  <div class="flex justify-center m-6">

    <div v-if="this.product !== null">
      <div class="flex flex-col items-center border rounded-lg bg-gray-100">
        <div class="w-full bg-white rounded-lg flex justify-center">
          <img :src="product.image" width="375"/>
        </div>
        <div class="w-full p-5 flex flex-col justify-between">
          <div>
            <h4
              class="
                mt-1
                font-semibold
                text-lg
                leading-tight
                truncate
                text-gray-700
              "
            >
              {{ product.title }}
            </h4>
            <div class="mt-1 text-gray-600">{{ product.description }}</div>
            <div class="mt-1 text-gray-600">Price: <span class="font-weight-bold yellow--text">{{ product.price }} €</span></div>
          </div>
          <v-btn
            class="
              snipcart-add-item
              mt-4
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            :data-item-id="product.id"
            :data-item-price="product.price"
            :data-item-url="`${this.$route.fullPath}`"
            :data-item-description="product.description"
            :data-item-image="product.image"
            :data-item-name="product.title">
            Add to cart
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteUrl: process.env.siteUrl
    }
  },
  computed: {
    product() {
      return this.$store.getters["products/get"](parseInt(this.$route.params.id))
    }
  },
}
</script>

<style>
</style>
