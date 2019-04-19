/// <reference path="Car.ts" />

let UI = {
    // Form 
    modelNameInput: document.getElementById('modelName') as HTMLInputElement,
    modelYearInput: <HTMLInputElement>document.getElementById('modelYear'),
    modelColorInput: <HTMLInputElement>document.getElementById('modelColor'),
    modelFuelTypeInput: <HTMLSelectElement>document.getElementById('modelFuelType'),
    addCarButton: document.getElementById('addCarInfo'),
    carTable: document.getElementById('carTable'),

    // edit Form
    editInputName: document.getElementById('editName') as HTMLInputElement,
    editInputYear: <HTMLInputElement>document.getElementById('editYear'),
    editInputColor: <HTMLInputElement>document.getElementById('editColor'),
    editInputFuelType: <HTMLSelectElement>document.getElementById('editFuelType'),
    carEditForm: document.getElementById('myModal'),
    editCarButton: document.getElementById('editCar'),

    // Buttons select
    allCarButton: document.getElementById('allCar'),
    deselCarButton: document.getElementById('deselCar'),
    petrolCarButton: document.getElementById('petrolCar'),
};

let indexOfActiveCar = -1; // -1 means car is not selected. 

let cars: Car[] = [];

UI.addCarButton.addEventListener('click', () => {

    let modelName = UI.modelNameInput.value;

    let modelYear = UI.modelYearInput.value;
    let modelYears = parseInt(modelYear);

    let modelColor = UI.modelColorInput.value;
    let modelFuel = UI.modelFuelTypeInput.value;

    let car = new Car(modelName, modelYears, modelColor, modelFuel);
    cars.push(car);

    drawTable();
});


function drawTable(): void {
    // Clearing table content before drowing car.   
    UI.carTable.innerHTML = '';

    // Drowing a line for every car.
    for(let i = 0; i < cars.length; i++){
        let car = cars[i];
        let tableRow = `
            <tr>
                <td>${car.model}</td>
                <td>${car.date_of_manufacture}</td>
                <td>${car.color}</td>
                <td>${car.fuel}</td>
                <td class="alignCenter">
                    <img src="image/edit.svg" onclick="editCar(${i})">
                    <img src="image/delete.svg" onclick="deleteCar(${i})">
                </td>
            </tr>`; 

        UI.carTable.innerHTML += tableRow;
    }
} 

// All car button 
UI.allCarButton.addEventListener('click', () => {

    // Clearing table content before drowing car.   
    UI.carTable.innerHTML = '';

    // Drowing a line for each car.
    for(let i = 0; i < cars.length; i++){
        let car = cars[i];
        let tableRow = `
            <tr>
                <td>${car.model}</td>
                <td>${car.date_of_manufacture}</td>
                <td>${car.color}</td>
                <td>${car.fuel}</td>
                <td class="alignCenter">
                    <img src="image/edit.svg" onclick="editCar(${i})">
                    <img src="image/delete.svg" onclick="deleteCar(${i})">
                </td>
            </tr>`; 

        UI.carTable.innerHTML += tableRow;
    }
});

// Diesel button 
UI.deselCarButton.addEventListener('click', () => {
    let Fuel: string = 'Dyzelis';
    UI.carTable.innerHTML = '';

    // Drowing a line for every car
    for(let i = 0; i < cars.length; i++){
        let car = cars[i];
        if(car.fuel === Fuel){
            let tableRow = `
            <tr>
                <td>${car.model}</td>
                <td>${car.date_of_manufacture}</td>
                <td>${car.color}</td>
                <td>${car.fuel}</td>
                <td class="alignCenter">
                    <img src="image/edit.svg" onclick="editCar(${i})">
                    <img src="image/delete.svg" onclick="deleteCar(${i})">
                </td>
            </tr>`; 

            UI.carTable.innerHTML += tableRow;
        }
    }
});

// Petrol button 
UI.petrolCarButton.addEventListener('click', () => {
    let Fuel: string = 'Benzinas';
    UI.carTable.innerHTML = '';

    // Drowing a line for every car
    for(let i = 0; i < cars.length; i++){
        let car = cars[i];
        if(car.fuel === Fuel){
            let tableRow = `
            <tr>
                <td>${car.model}</td>
                <td>${car.date_of_manufacture}</td>
                <td>${car.color}</td>
                <td>${car.fuel}</td>
                <td class="alignCenter">
                    <img src="image/edit.svg" onclick="editCar(${i})">
                    <img src="image/delete.svg" onclick="deleteCar(${i})">
                </td>
            </tr>`;

            UI.carTable.innerHTML += tableRow;
        }
    }
});

UI.editCarButton.addEventListener('click', () => {
    
    let car = cars[indexOfActiveCar];

    car.setModel(UI.editInputName.value);

    car.setYear_of_manufacture(parseInt(UI.editInputYear.value));

    car.setColor(UI.editInputColor.value);
    car.setFuel(UI.editInputFuelType.value);

    UI.carEditForm.style.display = 'none';
    drawTable();
});

function editCar(carIndex: number): void {
    indexOfActiveCar = carIndex;

    UI.editInputName.value = cars[carIndex].model;

    UI.editInputYear.value = cars[carIndex].date_of_manufacture.toString();

    UI.editInputColor.value = cars[carIndex].color;
    UI.editInputFuelType.value = cars[carIndex].fuel;

    // visually edit popup
    UI.carEditForm.style.display = 'block';
}

function closeForm(): void{ 
    // Close form
    document.getElementById("myModal").style.display = "none";
}

function deleteCar(carIndex: number): void{
    // Removing element from array
    cars.splice(carIndex, 1);

    // Drawing array element again.
    drawTable();
}