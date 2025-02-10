<script>
import axios from "axios";

export default {
  data() {
    return {
      alcoholList: [], // Lista över spritsorter
      selectedAlcohol: "", // Användarens val
      drinks: [], // Lista med drinkar
    };
  },
  methods: {
    async fetchAlcoholList() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        this.alcoholList = response.data.drinks;
      } catch (error) {
        console.error("Kunde inte hämta listan!", error);
      }
    },
    async fetchDrinks() {
      if (!this.selectedAlcohol) return;
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.selectedAlcohol}`);
        this.drinks = response.data.drinks;
      } catch (error) {
        console.error("Kunde inte hämta drinkar:", error);
      }
    },
  },
  mounted() {
    this.fetchAlcoholList();
  },
};
</script>

<template>
  <div class="container">
    <h2>Välj en alkoholtyp</h2>
    <select v-model="selectedAlcohol" @change="fetchDrinks">
      <option disabled value="">Välj en</option>
      <option v-for="alcohol in alcoholList" :key="alcohol.strIngredient1" :value="alcohol.strIngredient1">
        {{ alcohol.strIngredient1 }}
      </option>
    </select>

    <div v-if="drinks.length > 0">
      <h3>Drinkar med {{ selectedAlcohol }}</h3>
      <ul>
        <li v-for="drink in drinks" :key="drink.idDrink">
          <img :src="drink.strDrinkThumb" :alt="drink.strDrink" width="100">
          {{ drink.strDrink }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  max-width: 400px;
  margin: auto;
}
select {
  padding: 10px;
  margin: 10px;
  font-size: 16px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
}
img {
  border-radius: 5px;
}
</style>
