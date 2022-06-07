<template>
  <div v-if="products.length">
    <template v-for="(product, i) in products">
      <ProductCard :key="products.id" :product="product" />
    </template>
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
