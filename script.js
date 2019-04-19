var Car = /** @class */ (function () {
    function Car(model, date_of_manufacture, color, fuel) {
        this.model = model;
        this.date_of_manufacture = date_of_manufacture;
        this.color = color;
        this.fuel = fuel;
    }
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.setYear_of_manufacture = function (date_of_manufacture) {
        this.date_of_manufacture = date_of_manufacture;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    return Car;
}());
/// <reference path="Car.ts" />
var UI = {
    // Form 
    modelNameInput: document.getElementById('modelName'),
    modelYearInput: document.getElementById('modelYear'),
    modelColorInput: document.getElementById('modelColor'),
    modelFuelTypeInput: document.getElementById('modelFuelType'),
    addCarButton: document.getElementById('addCarInfo'),
    carTable: document.getElementById('carTable'),
    // edit Form
    editInputName: document.getElementById('editName'),
    editInputYear: document.getElementById('editYear'),
    editInputColor: document.getElementById('editColor'),
    editInputFuelType: document.getElementById('editFuelType'),
    carEditForm: document.getElementById('myModal'),
    editCarButton: document.getElementById('editCar'),
    // Buttons select
    allCarButton: document.getElementById('allCar'),
    deselCarButton: document.getElementById('deselCar'),
    petrolCarButton: document.getElementById('petrolCar'),
};
var indexOfActiveCar = -1; // -1 means car is not selected. 
var cars = [];
UI.addCarButton.addEventListener('click', function () {
    var modelName = UI.modelNameInput.value;
    var modelYear = UI.modelYearInput.value;
    var modelYears = parseInt(modelYear);
    var modelColor = UI.modelColorInput.value;
    var modelFuel = UI.modelFuelTypeInput.value;
    var car = new Car(modelName, modelYears, modelColor, modelFuel);
    cars.push(car);
    drawTable();
});
function drawTable() {
    // Clearing table content before drowing car.   
    UI.carTable.innerHTML = '';
    // Drowing a line for every car.
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var tableRow = "\n            <tr>\n                <td>" + car.model + "</td>\n                <td>" + car.date_of_manufacture + "</td>\n                <td>" + car.color + "</td>\n                <td>" + car.fuel + "</td>\n                <td class=\"alignCenter\">\n                    <img src=\"image/edit.svg\" onclick=\"editCar(" + i + ")\">\n                    <img src=\"image/delete.svg\" onclick=\"deleteCar(" + i + ")\">\n                </td>\n            </tr>";
        UI.carTable.innerHTML += tableRow;
    }
}
// All car button 
UI.allCarButton.addEventListener('click', function () {
    // Clearing table content before drowing car.   
    UI.carTable.innerHTML = '';
    // Drowing a line for each car.
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var tableRow = "\n            <tr>\n                <td>" + car.model + "</td>\n                <td>" + car.date_of_manufacture + "</td>\n                <td>" + car.color + "</td>\n                <td>" + car.fuel + "</td>\n                <td class=\"alignCenter\">\n                    <img src=\"image/edit.svg\" onclick=\"editCar(" + i + ")\">\n                    <img src=\"image/delete.svg\" onclick=\"deleteCar(" + i + ")\">\n                </td>\n            </tr>";
        UI.carTable.innerHTML += tableRow;
    }
});
// Diesel button 
UI.deselCarButton.addEventListener('click', function () {
    var Fuel = 'Dyzelis';
    UI.carTable.innerHTML = '';
    // Drowing a line for every car
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        if (car.fuel === Fuel) {
            var tableRow = "\n            <tr>\n                <td>" + car.model + "</td>\n                <td>" + car.date_of_manufacture + "</td>\n                <td>" + car.color + "</td>\n                <td>" + car.fuel + "</td>\n                <td class=\"alignCenter\">\n                    <img src=\"image/edit.svg\" onclick=\"editCar(" + i + ")\">\n                    <img src=\"image/delete.svg\" onclick=\"deleteCar(" + i + ")\">\n                </td>\n            </tr>";
            UI.carTable.innerHTML += tableRow;
        }
    }
});
// Petrol button 
UI.petrolCarButton.addEventListener('click', function () {
    var Fuel = 'Benzinas';
    UI.carTable.innerHTML = '';
    // Drowing a line for every car
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        if (car.fuel === Fuel) {
            var tableRow = "\n            <tr>\n                <td>" + car.model + "</td>\n                <td>" + car.date_of_manufacture + "</td>\n                <td>" + car.color + "</td>\n                <td>" + car.fuel + "</td>\n                <td class=\"alignCenter\">\n                    <img src=\"image/edit.svg\" onclick=\"editCar(" + i + ")\">\n                    <img src=\"image/delete.svg\" onclick=\"deleteCar(" + i + ")\">\n                </td>\n            </tr>";
            UI.carTable.innerHTML += tableRow;
        }
    }
});
UI.editCarButton.addEventListener('click', function () {
    var car = cars[indexOfActiveCar];
    car.setModel(UI.editInputName.value);
    car.setYear_of_manufacture(parseInt(UI.editInputYear.value));
    car.setColor(UI.editInputColor.value);
    car.setFuel(UI.editInputFuelType.value);
    UI.carEditForm.style.display = 'none';
    drawTable();
});
function editCar(carIndex) {
    indexOfActiveCar = carIndex;
    UI.editInputName.value = cars[carIndex].model;
    UI.editInputYear.value = cars[carIndex].date_of_manufacture.toString();
    UI.editInputColor.value = cars[carIndex].color;
    UI.editInputFuelType.value = cars[carIndex].fuel;
    // visually edit popup
    UI.carEditForm.style.display = 'block';
}
function closeForm() {
    // Close form
    document.getElementById("myModal").style.display = "none";
}
function deleteCar(carIndex) {
    // Removing element from array
    cars.splice(carIndex, 1);
    // Drawing array element again.
    drawTable();
}
