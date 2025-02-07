<script>
import axios from "axios";

  export default {
    //Kolla Computed!! + SPA for display
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
  <div class="cocktail-display">
    <h2>{{ cocktail.strDrink }}</h2>
    <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
    <button @click="fetchDrink">Hämta ny drink</button>
  </div>
</template>
