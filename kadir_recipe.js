let amounts = [1, 100, 1, 1, 1, 1, 1];
let quantity = document.getElementById("serviceQuantity");

let amountElements = [
    document.getElementById("amount_Aubergine"),
    document.getElementById("amount_Hackfleisch"),
    document.getElementById("amount_Zwiebel"),
    document.getElementById("amount_Tomate"),
    document.getElementById("amount_Paprika"),
    document.getElementById("amount_Knoblauch"),
    document.getElementById("amount_Oel")
];

let minService = 1;
let maxService = 20;

quantity.min = minService;
quantity.max = maxService;

function serviceCalculator(ingredientsAmount) {
    return quantity.value * ingredientsAmount;
}

function amountCalculate() {
    let value = Number(quantity.value);

    if(value < minService) value = minService;
    if(value > maxService) value = maxService;

    quantity.value = value;

    amountElements.forEach((el, index) => {
        el.textContent = serviceCalculator(amounts[index]);
    });
}

function enterKeyPress(event) {
    if(event.key == "Enter"){
        amountCalculate();
        quantity.blur();
    }
}

console.log(quantity);
console.log(amountElements);