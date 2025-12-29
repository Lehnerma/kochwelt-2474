let quantiy = document.getElementById("inp_quantity").value;
let table = document.getElementById("recipe_body");
let tiramisu = [
  { amount: 125, unit: "g", ingridient: "Mascarpone" },
  { amount: 25, unit: "g", ingridient: "Staubzucker" },
  { amount: 50, unit: "g", ingridient: "Biskotten" },
  { amount: 1, unit: "stk", ingridient: "Eigelb" },
  { amount: 0.5, unit: "stk", ingridient: "Eiweiß" },
  { amount: 1, unit: "Tasse", ingridient: "Kaffee abgekühlt" },
  { amount: 0.5, unit: "EL", ingridient: "Amaretto oder nach Geschmack auch mehr" },
  { amount: 1, unit: "EL", ingridient: "Kakaopulver ungesüßt, zum bestreuen" },
];
function getQuantity() {
  let value = document.getElementById("inp_quantity").value;
  if (value == "" || value == 0 || value >= 20 || value <= 0) {
    value = 1;
    return value;
  } else {
    return value;
  }
}
function getRecipe(factor) {
  factor = getQuantity();
  table.innerHTML = "";
  for (item in tiramisu) {
    let row = `
        <tr class="recipe_row">
            <td class="recipe_amount">${tiramisu[item].amount * factor} ${tiramisu[item].unit} </td>
            <td class="recipe_ingridient">${tiramisu[item].ingridient}</td>
        </tr>
        `;
    table.innerHTML += row;
  }
}

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data);

  fetch("https://formspree.io/f/mregbrpq", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./index.html"; // landing page after submit
    })
    .catch((error) => {
      console.log(error);
    });
}
