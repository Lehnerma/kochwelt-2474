const ingredient1Startvalue = 200;
const ingredient2Startvalue = 100;
const ingredient3Startvalue = 200;
const ingredient4Startvalue = 2;
const ingredient5Startvalue = 4;

function checkValue() {
    if (document.getElementById("inp_quantity").value <= 0 || isNaN(document.getElementById("inp_quantity").value)) {
        document.getElementById("inp_quantity").value = 1;
    } else if (document.getElementById("inp_quantity").value > 20) {
        document.getElementById("inp_quantity").value = 20;
    } else {
        // do nothing
    }
    calculateValue();

}
function calculateValue() {
    const value1 = document.getElementById("inp_quantity").value * ingredient1Startvalue;
    document.getElementById("adjusted-amount1").textContent = value1;

    const value2 = document.getElementById("inp_quantity").value * ingredient2Startvalue;
    document.getElementById("adjusted-amount2").textContent = value2;

    const value3 = document.getElementById("inp_quantity").value * ingredient3Startvalue;
    document.getElementById("adjusted-amount3").textContent = value3;

    const value4 = document.getElementById("inp_quantity").value * ingredient4Startvalue;
    document.getElementById("adjusted-amount4").textContent = value4;

    const value5 = document.getElementById("inp_quantity").value * ingredient5Startvalue;
    document.getElementById("adjusted-amount5").textContent = value5;
}




