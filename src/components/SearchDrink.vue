<script>
import axios from "axios";

//   export default {
//     data() {
//     return {
//       cocktailName: {},
//     };
//   },
//   methods: {
//     async fetchDrink() {
//       try {
//         const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
//         this.cocktail = response.data.drinks[0];
//       } catch (error) {
//         console.error("Could not get drink!", error);
//       }
//     },
//   },
//   mounted() {
//     this.fetchDrink();
//   },
// };
</script>

<template>
  <div id="search_bar">
  <input type="text" id="drink_name" placeholder="Drink name">
  <input type="submit" id="search_button" value="Search">
</div>
<div id="search_filters">

</div>
</template>

<style scoped>
  #search_bar{
    margin-top: 30px;
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
    cursor: pointer;
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
</style>
