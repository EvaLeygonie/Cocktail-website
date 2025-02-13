<script>
import axios from "axios"

  export default {
    data() {
    return {
      cocktail: {},
    }
  },
  methods: {
    async randomizeDrink() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        this.cocktail = response.data.drinks[0]
      } catch (error) {
        console.error("Could not get drink!", error)
      }
    },
  },
  mounted() {
    this.randomizeDrink()
  },
}
</script>

<template>
  <div class="drink-card-random">
    <h2>{{ cocktail.strDrink }}</h2>
    <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
    <button @click="randomizeDrink">Randomize</button>
    <button>See Recipe</button>
  </div>
</template>

<style scoped>
  .drink-card-random {
    text-align: center;
    border: 2px solid #C6DCBA;
    background:rgba(255, 205, 178, 0.5);
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    width: 30vw;
    margin: auto;
  }
</style>
