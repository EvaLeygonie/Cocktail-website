<script>
import axios from "axios";

  export default {
    data() {
    return {
      ingredients: {},
      // ingredientImages: "www.thecocktaildb.com/images/ingredients/gin.png"
    };
  },
  methods: {
    async fetchIngredients() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        this.ingredients = response.data.drinks;
      } catch (error) {
        console.error("Could not get ingredients!", error);
      };
    },
  },
  mounted() {
    this.fetchIngredients()
  }
};
</script>

<template>
  <div class="ingredient-display">
    <li v-for="ingredient in ingredients">{{ ingredient.strIngredient1  }}</li>
  </div>
</template>

<style scoped>
.ingredient-display {
  text-align: center;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: auto;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
}
</style>
