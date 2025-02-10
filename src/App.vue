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
  <ul>
    <li>
      <RouterLink to="/">Randomize</RouterLink>
    </li>
    <li>
      <RouterLink to="/search">Search drink</RouterLink>
    </li>
  </ul>
</nav>

<main>
  <RouterView />
</main>
</template>
