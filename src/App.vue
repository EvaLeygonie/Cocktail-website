<script>
  import CocktailRandom from "./components/CocktailRandom.vue";
  import IngredientList from "./components/IngredientList.vue";
  // import AlcoholList from "./components/AlcoholList.vue";

  export default {
    components: {
      IngredientList,
      CocktailRandom
    }
  };
</script>

<template>
  <CocktailRandom />
  <IngredientList />
</template>
