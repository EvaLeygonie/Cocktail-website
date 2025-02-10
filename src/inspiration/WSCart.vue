<script>
 export default {
  props: {
    // msg: String,
    userCart: Object
  },
  computed: {
    totalPrice() {
      let total = 0
      if (this.userCart.cartProducts !== null) {
        for (let i = 0; i < this.userCart.cartProducts.length; i++) {
        total += this.userCart.cartProducts[i].price
        }
      }
      return total
    }
  },
  methods: {
    onclick() {
      this.userCart.cartProducts = []
    }
  }
 }
</script>

<template>
  <section id="cart">
  <span>Cart: </span>

  <span @click="onclick">❌</span>
  <p v-for="cartProduct in userCart.cartProducts">{{cartProduct.title}}, {{cartProduct.price}} SEK</p>

  <div id="totalPrice">
    <p>Total price: {{ totalPrice }}</p>
  </div>
</section>
</template>
