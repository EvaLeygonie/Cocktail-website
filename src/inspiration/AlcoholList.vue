<script>
import axios from "axios"

export default {
  data() {
    return {
      alcoholList: [],
    }
  },
  methods: {
    async fetchIngredients() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        const allIngredients = response.data.drinks

        const alcoholPromises = allIngredients.map(async (ingredient) => {
          const ingredientName = ingredient.strIngredient1

          const detailsResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
          )
          const details = detailsResponse.data.ingredients[0]

          if (details.strAlcohol === "Yes") {
            return {
              name: ingredientName,
              image: `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`
            }
          }

        })
          this.alcoholList = (await Promise.all(alcoholPromises)).filter(Boolean)
      } catch (error) {
        console.error("Could not get ingredients!", error)
      }
    },
  },
  created() {
    this.fetchIngredients()
  }
}
</script>

<template>
  <div>
    <h2>Choose your poison!</h2>
    <div class="grid">
      <div v-for="alcohol in alcoholList" :key="alcohol.name" class="card">
        <img :src="alcohol.image" :alt="alcohol.name" />
        <p>{{ alcohol.name }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.card {
  text-align: center;
  width: 120px;
}
.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
