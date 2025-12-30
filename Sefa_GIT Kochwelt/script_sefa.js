const ingredient1Startvalue = 200;
const ingredient2Startvalue = 100;
const ingredient3Startvalue = 200;
const ingredient4Startvalue = 2;
const ingredient5Startvalue = 4;

/*
function setTwoNumberDecimal() {
    document.getElementById("portion-number").value = parseFloat(document.getElementById("portion-number").value).toFixed(2);
}
*/

function checkValue() {
    if (document.getElementById("portion-number").value <= 0 || isNaN(document.getElementById("portion-number").value)) {
        document.getElementById("portion-number").value = 1;
    } else if (document.getElementById("portion-number").value > 20) {
        document.getElementById("portion-number").value = 20;
    } else {
        // do nothing
    }
    calculateValue();
}

function calculateValue() {
    const value1 = document.getElementById("portion-number").value * ingredient1Startvalue;
    document.getElementById("adjusted-amount1").textContent = value1;

    const value2 = document.getElementById("portion-number").value * ingredient2Startvalue;
    document.getElementById("adjusted-amount2").textContent = value2;

    const value3 = document.getElementById("portion-number").value * ingredient3Startvalue;
    document.getElementById("adjusted-amount3").textContent = value3;

    const value4 = document.getElementById("portion-number").value * ingredient4Startvalue;
    document.getElementById("adjusted-amount4").textContent = value4;

    const value5 = document.getElementById("portion-number").value * ingredient5Startvalue;
    document.getElementById("adjusted-amount5").textContent = value5;
}




