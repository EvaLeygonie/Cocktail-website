<script>
import axios from "axios";

  export default {
    data() {
    return {
      ingredients: {},
    };
  },
  methods: {
    async fetchIngredient() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        this.ingredients = response.data.drinks;
      } catch (error) {
        console.error("Could not get ingredients!", error);
      }
    },
  },
  mounted() {
    this.fetchIngredient();
  },
};
</script>

<template>
  <div class="ingredient-display">
    <li v-for="ingredient in ingredients">{{ ingredient.strIngredient1  }}</li>
  </div>
</template>
