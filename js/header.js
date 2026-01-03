const recipeOfTheDay = document.getElementById("recipe_of_the_day");

const recipeUrl = [
  "../recipe/tiramisu.html",
  "../recipe/pasta_tomato.html",
  "../recipe/chocolate_cake.html",
  "../recipe/lasagne.html",
  "../recipe/karniyarik.html",
];

recipeOfTheDay.href = setRecipeOfTheDay();

function setRecipeOfTheDay() {
  let randomNumber = Math.floor(Math.random() * recipeUrl.length);
  return recipeUrl[randomNumber];
}

function toggleBurgerMenu() {
  document.getElementById("hamburger_menu").classList.toggle("change");
  document.getElementById("resp_nav").classList.toggle("resp_nav_closed");
}
