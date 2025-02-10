<script>
  import Products from "./Products.vue";
  import Cart from "./Cart.vue";

 export default {
  components: {
      Products,
      Cart
    },
  data () {
  return {
    message: "Välkomna",
    defaultLink: "/product",
    chosenProductName: "",
    productNotExist: false,
    userCart: {cartProducts: [], totalCost: 0},
    allProductsDb: null
  }
},
created() {
  this.getProductsFromFakeAPI()
},
methods: {
  onChosenItem(chosenProd) {
    console.log("Vald produkt ändrad!")
    this.chosenProductName =  chosenProd
  },
  getProductsFromFakeAPI() {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.allProductsDb = result
    })
  },
  addProductToCart() {
    const foundProduct = this.allProductsDb.find(
      (product) => product.title === this.chosenProductName.title
    )

    if (foundProduct) {
      this.userCart.cartProducts.push(this.chosenProductName)
      this.productNotExist = false
    } else {
      this.productNotExist = true
    }
  }
}
 }
</script>

<template>
  <h1>Välkommen till webbshoppen</h1>

<cart :user-cart="userCart"></cart>

  <section>
    <input id="searchField" placeholder="Sök efter vara" value="">
  </section>

  <products @item-chosen="onChosenItem" :all-products-db="allProductsDb" :default-link="defaultLink"></products>

  <section id="addProductSection">
    <input id="productName" placeholder="Skriv in varans namn" v-model="chosenProductName.title">
    <button @click="addProductToCart" id="addProductButton">Add</button>

    <p style="color: red" v-if="productNotExist" id="addProductMessage">Produkten finns inte!! :/</p>
    <p style="color: green" v-else id="addProductMessage">Produkt tillagd!</p>
  </section>

  <cart :user-cart="userCart" :chosen-product-name="chosenProductName"></cart>
</template>
