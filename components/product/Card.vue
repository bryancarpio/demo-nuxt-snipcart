<template>
  <v-card
    class="mx-auto my-5"
    max-width="344"
  >
    <v-img
      :src="product.image"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.description }}
    </v-card-subtitle>

    <v-card-text large class="text-h6">
      Price: <span class="font-weight-bold yellow--text">{{ product.price }} €</span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        nuxt
        :to="`/products/${product.id}`"
      >
        see more
      </v-btn>
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
