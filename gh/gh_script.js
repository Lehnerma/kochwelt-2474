const servingsButton = document.getElementById("servings_number_button");
const servingsNumberInput = document.getElementById("servings_number_input");
const mobileMenu = document.getElementById("mobile_nav_menu");
const mobileMenuButton = document.getElementById("mobile_menu_button");

const amountPasta = document.getElementById("amount_pasta");
const amountTomatoes = document.getElementById("amount_tomatoes");
const amountTomatopaste = document.getElementById("amount_tomatopaste");
const amountOil = document.getElementById("amount_oil");
const amountOnions = document.getElementById("amount_onion");
const amountGarlic = document.getElementById("amount_garlic");

const pasta = 200;
const tomato = 250;
const tomatopaste = 0.5;
const oil = 1;
const onions = 0.5;
const garlic = 0.5;

const minServings = 1;
servingsNumberInput.min = minServings;
const maxServings = 20;
servingsNumberInput.max = maxServings;

function calculateServings(ingredientsAmount) {
  return servingsNumberInput.value * ingredientsAmount;
}

function calculateIngredientsAmount() {
  if (servingsNumberInput.value < minServings) {
    servingsNumberInput.value = 1;
  } else if (servingsNumberInput.value > maxServings) {
    servingsNumberInput.value = 20;
  } else {
    amountPasta.textContent = calculateServings(pasta);
    amountTomatoes.textContent = calculateServings(tomato);
    amountTomatopaste.textContent = calculateServings(tomatopaste);
    amountOil.textContent = calculateServings(oil);
    amountOnions.textContent = calculateServings(onions);
    amountGarlic.textContent = calculateServings(garlic);
  }
}

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    calculateIngredientsAmount();
    servingsNumberInput.blur();
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("mobile_menu_box_closed");
}
