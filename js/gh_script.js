const servingsButton = document.getElementById("servings_number_button");
const servingsNumberInput = document.getElementById("servings_number_input");
const ingredientsTable = document.getElementById("recipe_body");

const recipe = [
  { name: "Nudeln", amount: 200, unit: "g" },
  { name: "Tomaten", amount: 250, unit: "g" },
  { name: "Tomatenmark", amount: 0.5, unit: "EL" },
  { name: "Olivenöl", amount: 1, unit: "EL" },
  { name: "Zwiebeln", amount: 0.5, unit: "Stk." },
  { name: "Knoblauchzehe", amount: 0.5, unit: "Stk." },
];

const minServings = 1;
servingsNumberInput.min = minServings;
const maxServings = 20;
servingsNumberInput.max = maxServings;

function checkServingsNumber(servingsNumberValue) {
  if (servingsNumberValue < minServings) {
    return 1;
  } else if (servingsNumberValue > maxServings) {
    return 20;
  } else {
    return servingsNumberValue;
  }
}

function calculateServings(servingsNumberValue, ingredientsAmount) {
  return servingsNumberValue * ingredientsAmount;
}

function calculateIngredientsAmount() {
  let servings = checkServingsNumber(servingsNumberInput.value);
  console.log(servings);

  ingredientsTable.innerHTML = "";
  for (let i = 0; i < recipe.length; i++) {
    let row = `
        <tr class="recipe_row">
            <td class="recipe_amount">${calculateServings(
              recipe[i].amount,
              servings
            )} 
            ${recipe[i].unit} </td>
            <td class="recipe_ingridient">${recipe[i].name}</td>
        </tr>
        `;
    ingredientsTable.innerHTML += row;
  }
}

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    calculateIngredientsAmount();
    servingsNumberInput.blur();
  }
}
