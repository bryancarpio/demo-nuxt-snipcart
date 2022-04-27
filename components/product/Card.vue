<!--<nuxt-link :to="`/products/${product.id}`">-->
<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Title product
    </v-card-title>

    <v-card-subtitle>
      subtitle product
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        see more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({

  }),
}
</script>

<style scoped>

</style>
