<script>
  import CocktailRandom from "./components/CocktailRandom.vue";
  import IngredientList from "./components/IngredientList.vue";
  // import HelloWorld from "./components/HelloWorld.vue";

  export default {
    components: {
      IngredientList,
      CocktailRandom
      // HelloWorld
    }
  };
</script>

<template>
  <CocktailRandom />
  <IngredientList />
  <!-- <HelloWorld msg="Hello World!" /> -->
</template>
