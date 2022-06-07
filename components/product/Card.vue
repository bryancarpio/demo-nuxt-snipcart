<template>
  <v-card
    class="mx-auto my-5"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.description }}
    </v-card-subtitle>

    <v-card-actions>
      <nuxt-link :to="`/products/${product.id}`">
        <v-btn
          color="orange lighten-2"
          text
        >
          see more
        </v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
}
</script>

<style scoped>

</style>
