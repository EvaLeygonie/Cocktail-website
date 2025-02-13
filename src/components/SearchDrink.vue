<script>
import axios from "axios"
import ShowDetails from "../components/ShowDetails.vue"

  export default {
    components: {
      ShowDetails,
    },
    data() {
    return {
      drinks: [],
      drinkSearch: "",
      drinkResult: [],
      search: false,
      details: false,
      drinkId: "",
    }
  },
  methods: {
    async searchDrink() {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.drinkSearch}`)
        this.drinkResult = response.data.drinks
        this.search = true
        this.drinkSearch = ""
      } catch (error) {
        console.error("Could not get drink!", error)
      }
    },
    showDetails(id) {
        this.details = true
        this.drinkId = id
    },
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
  <div id="search_bar">
    <!-- <div id="search_filters"></div> -->
  <input v-model="drinkSearch" id="drink_name" placeholder="Drink name">
  <input type="submit" @click="searchDrink" id="search_button" value="Search">
  </div>

  <div v-if="details">
      <ShowDetails :drinkId="drinkId"></ShowDetails>
    </div>

  <div v-if="search" class="drinks-grid">
    <div class="drink-card" v-for="drink in drinkResult">
      <h3>{{ drink.strDrink }}</h3>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
      <button @click="showDetails(drink.idDrink)">See Recipe</button>
    </div>
  </div>

  <div v-else class="drinks-grid">
    <div class="drink-card" v-for="drink in drinks" :key="drink.idDrink">
      <h3>{{ drink.strDrink }}</h3>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
      <button @click="showDetails(drink.idDrink)">See Recipe</button>
    </div>
  </div>
</template>

<style scoped>
  #search_bar{
    margin: 30px 0px;
    text-align: center;
    padding: 5px
  }

  #drink_name {
    padding: 5px 15px;
    background-color: rgba(252, 229, 202, 0.8);
    color: #1B1B1B;
    font-weight: 600;
    font-size: 1.1em;
    border:  none;
    border-radius: 15px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  #drink_name:focus {
  outline: 2px solid rgba(181, 130, 140, 0.7);
}

  #search_button {
    margin: 5px 10px;
    padding: 5px 15px;
    background-color: rgba(181, 130, 140, 0.7);
    color: #1B1B1B;
    font-weight: 600;
    font-size: 1.1em;
    border:  none;
    border-radius: 15px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

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
