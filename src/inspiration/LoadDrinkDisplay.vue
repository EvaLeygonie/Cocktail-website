<script>
import axios from "axios"

  export default {
    data() {
    return {
      drinks: [],
    }
  },
  async created() {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      this.drinks = response.data.drinks.slice(0, 12)
    } catch (error) {
      console.error("Could not get drink list!", error)
    }
  }
}
</script>

<template>
  <div class="drinks-grid">
    <div class="drink-card" v-for="drink in drinks" :key="drink.idDrink">
      <h3>{{ drink.strDrink }}</h3>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
      <button>See Recipe</button>
    </div>
  </div>
</template>

<style scoped>
  .drinks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 30px 20px;
    gap: 15px;
  }

  .drink-card {
    text-align: center;
    border: 2px solid #C6DCBA;
    background:rgba(255, 205, 178, 0.5);
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
</style>
