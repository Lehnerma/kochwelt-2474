let value = [1, 2, 3, 4, 5, 6];
let cars = ["TOGG", "BMW", "BENZ", "BYD", "TESLA", "TOYOTA"];

function outprint() {
    for(let i = 0; i < value.length; i++){
        for(let y = 0; y < cars.length; y++){
            console.log(value[i] + " " + cars[y]);
        }
    }
}