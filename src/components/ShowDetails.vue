<script>
import axios from "axios"

  export default {
    props: {drinkId: String},
    computed: {
      ingredientList(){
        const list = []
        for (let i = 0; i < this.ingredientName.length; i++){
          list.push({
            name: this.ingredientName[i],
            measure: this.ingredientMeasure[i]
          })
        }
        return list
      }
    },
    data() {
    return {
      id: this.drinkId,
      cocktail: {},
      ingredientName: [],
      ingredientMeasure: [],
    }
  },
    methods: {
      async drinkDetails() {
        try {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
          this.cocktail = response.data.drinks[0]

          const ingredients = Object.keys(this.cocktail).filter(key => key.startsWith("strIngredient")).map(value => this.cocktail[value])
          this.ingredientName = Object.values(ingredients).filter(Boolean)

          const measure = Object.keys(this.cocktail).filter(key => key.startsWith("strMeasure")).map(value => this.cocktail[value])
          this.ingredientMeasure = Object.values(measure).filter(Boolean)

        } catch (error) {
          console.error("Could not get drink!", error)
        }
      }
    },
    updated() {
      if(this.drinkId !== this.id){
        this.id = this.drinkId
        console.log(this.drinkId, this.id)
        this.drinkDetails()
      }
    },
    created() {
      this.drinkDetails()
    },
  }
</script>

<template>
  <div class="recipe-card">
    <div class="drink-image">
    <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
  </div>
  <div class="drink-recipe">
    <h2>{{ cocktail.strDrink }}</h2>
    <p><em>{{ cocktail.strAlcoholic }}</em></p>
    <h3>Ingredients:</h3>
    <ul>
      <li v-for="ingredient in ingredientList"><strong>{{ ingredient.name }}</strong> - {{ ingredient.measure }}</li>
    </ul>
    <h3>Instructions:</h3>
    <p>{{ cocktail.strInstructions }}</p>
    </div>
  </div>
</template>
