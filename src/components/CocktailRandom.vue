<script>
import axios from "axios";

  export default {
    data() {
    return {
      cocktail: {},
    };
  },
  methods: {
    async fetchDrink() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        this.cocktail = response.data.drinks[0];
      } catch (error) {
        console.error("Could not get drink!", error);
      }
    },
  },
  mounted() {
    this.fetchDrink();
  },
};
</script>

<template>
  <div class="cocktail-card">
    <h2>{{ cocktail.strDrink }}</h2>
    <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
    <button @click="fetchDrink">Randomize</button>
    <button><RouterLink to="/details">Recipe</RouterLink></button>
  </div>
</template>

<style scoped>
.cocktail-card {
  text-align: center;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: auto;
}
img {
  max-width: 100%;
  border-radius: 10px;
  margin: 10px 0;
}
button {
  padding: 10px 15px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
