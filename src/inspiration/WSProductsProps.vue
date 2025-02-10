<script>
  export default {
    props: {
    allProductsDb: Array,
    defaultLink: String
  },
    methods: {
      onProductClick(product) {
        console.log(product)
        this.$emit("item-chosen", product)
      }
    }
  }
</script>

<template>
   <section id="availableProducts">
      <h2>All products</h2>
      <p @click="onProductClick(product)" v-for="product in allProductsDb">
      {{product.title}}, {{product.price}},
      <router-link v-bind:to="defaultLink + '/' + product.id">More info!</router-link>
      </p>
  </section>
</template>
