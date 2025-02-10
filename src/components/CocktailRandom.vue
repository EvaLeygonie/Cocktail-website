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
    <button><RouterLink to="/details">See Recipe</RouterLink></button>
  </div>
</template>

<style scoped>
.cocktail-card {
  text-align: center;
  border: 2px solid #E5989B;
  background: #FFB4A2;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 300px;
  margin: auto;
}
</style>
