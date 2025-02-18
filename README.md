//=== DRINK LINKS ===///
Random drink:
https://www.thecocktaildb.com/api/json/v1/1/random.php

Drink after name:
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
=> Find drink name

Drink details:
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
=> Find drink id

//=== INGREDIENT LINKS ===///
https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
=> Show only alcoholic drinks!!

Specific ingredient:
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
=> Find ingredient name

//=== TODO ===//

- Add Router link to details button on both views

//=== HELP ===//
CTRL + SHIFT + ´ => open terminal

Router link to details:
<RouterLink to="/details">Recipe</RouterLink>

- fix special link to id or name

//=== COLORS ===//
#C6DCBA - rgba(198, 220, 186, 0.5)
#B5828C - rgba(181, 130, 140, 0.5)
#E5989B - rgba(229, 152, 155, 0.5)
#FFB4A2 - rgba(255, 180, 162, 0.5)
#FFCDB2 - rgba(255, 205, 178, 0.5)
#FCE5CA - rgba(252, 229, 202, 0.5)
#1B1B1B - rgba(0, 0, 0, 0.5);

//=== Filter ingredient list ===//
let obs = {a: null, b: "socker"}
Object.values(obs)
=> Array [ null, "socker" ]
Object.values(obs).filter(Boolean)
=> Array [ "socker" ]

<form :style="{ color: formError ? 'firebrick' : 'black' }">
  ...
</form>
