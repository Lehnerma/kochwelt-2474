const basePortions = 1;

const ingredients = [
  { amount: 75, unit: "g", name: "Lasagneplatten" },
  { amount: 125, unit: "g", name: "Rinderhackfleisch" },
  { amount: 0.5, unit: "Stk", name: "Zwiebel" },
  { amount: 1, unit: "Stk", name: "Knoblauchzehen" },
  { amount: 200, unit: "ml", name: "Passierte Tomaten" },
  { amount: 120, unit: "ml", name: "Milch" },
  { amount: 15, unit: "g", name: "Butter" },
  { amount: 15, unit: "g", name: "Mehl" },
  { amount: 75, unit: "g", name: "Geriebener Käse" }
];

function getRecipe() {
  const inp = document.getElementById("inp_quantity");
  let portions = Number(inp.value);

  if (isNaN(portions) || portions < 1) {
    portions = 1;
  }

  if (portions > 20) {
    alert("Das Rezept ist auf 20 Portionen beschränkt!");
    portions = 20;
  }

  inp.value = portions;

  const tbody = document.getElementById("recipe_body");
  tbody.innerHTML = "";

  ingredients.forEach(item => {
    const amount = (item.amount / basePortions) * portions;

    const row = document.createElement("tr");
    row.className = "recipe_row";

    const amountTd = document.createElement("td");
    amountTd.className = "recipe_amount";
    amountTd.textContent = `${formatAmount(amount)} ${item.unit}`;

    const nameTd = document.createElement("td");
    nameTd.className = "recipe_ingridient";
    nameTd.textContent = item.name;

    row.appendChild(amountTd);
    row.appendChild(nameTd);
    tbody.appendChild(row);
  });
}

function formatAmount(amount) {
  return Number.isInteger(amount)
    ? amount
    : amount.toFixed(1).replace(".", ",");
}
