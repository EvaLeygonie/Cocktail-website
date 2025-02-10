<script>
  // import CocktailRandom from "./components/CocktailRandom.vue";

  export default {
    components: {
      // CocktailRandom,
    }
  };
</script>

<template>

    <nav>
      <RouterLink to="/">Randomize</RouterLink>
      <h1>Cocktails!</h1>
      <RouterLink to="/search">Search drink</RouterLink>
    </nav>


<main>
  <RouterView />
</main>
</template>
