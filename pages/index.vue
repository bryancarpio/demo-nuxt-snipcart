<template>
  <div v-if="products.length">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(product, i) in products" :key="products.id">
          <ProductCard :product="product"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "~/components/product/Card";

export default {
  name: 'IndexPage',
  components: {ProductCard},
  computed: {
    products() {
      return this.$store.getters["products/list"];
    },
  },
}
</script>
