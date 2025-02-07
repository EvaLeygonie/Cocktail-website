<script>
  import CocktailsList from "./components/CocktailsList.vue";
  import IngredientList from "./components/IngredientList.vue";
  // import HelloWorld from "./components/HelloWorld.vue";

  export default {
    components: {
      IngredientList,
      CocktailsList
      // HelloWorld
    }
  };
</script>

<template>
  <IngredientList />
  <CocktailsList />
  <!-- <HelloWorld msg="Hello World!" /> -->
</template>
