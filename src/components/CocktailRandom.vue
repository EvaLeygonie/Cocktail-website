<script>
import axios from "axios"

  export default {
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
      cocktail: {},
      ingredientName: [],
      ingredientMeasure: [],
    }
  },
  methods: {
    async randomizeDrink() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        this.cocktail = response.data.drinks[0]

        const ingredients = Object.keys(this.cocktail).filter(key => key.startsWith("strIngredient")).map(value => this.cocktail[value])
        this.ingredientName = Object.values(ingredients).filter(Boolean)
        console.log(this.ingredientName)

        const measure = Object.keys(this.cocktail).filter(key => key.startsWith("strMeasure")).map(value => this.cocktail[value])
        this.ingredientMeasure = Object.values(measure).filter(Boolean)
        console.log(this.ingredientMeasure)

      } catch (error) {
        console.error("Could not get drink!", error)
      }
    },
  },
  mounted() {
    this.randomizeDrink()
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
    <ul>
      <li v-for="ingredient in ingredientList"><strong>{{ ingredient.name }}</strong> - {{ ingredient.measure }}</li>
    </ul>
    <p>{{ cocktail.strInstructions }}</p>
    <button @click="randomizeDrink">Randomize</button>
    </div>
  </div>
</template>

<style scoped>
  .recipe-card {
    display: flex;
    text-align: center;
    border: 2px solid #C6DCBA;
    background:rgba(255, 205, 178, 0.5);
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    width: 80vw;
    margin: auto;
  }

  .drink-image {
    text-align: center;
    margin-right: 40px;
    width: 40vw;
  }

  .drink-recipe {
    text-align: left;
    width: 30vw;
    p {
      text-align: left;
      margin: 30px 0px;
    }
    h2 {
      margin-bottom: 30px;
      margin-top: 15px;
    }
  }
</style>
