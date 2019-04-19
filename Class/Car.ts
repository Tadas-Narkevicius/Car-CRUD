class Car
{
    model: string; 
    date_of_manufacture: number; 
    color: string;
    fuel: string;

    constructor(model: string, date_of_manufacture: number,  color: string, fuel: string){
        this.model = model;
        this.date_of_manufacture = date_of_manufacture;
        this.color = color;
        this.fuel = fuel;
    }

    setModel(model: string){
        this.model = model;
    }

    setYear_of_manufacture(date_of_manufacture: number){
        this.date_of_manufacture = date_of_manufacture;
    }

    setColor(color: string){
        this.color = color;
    }

    setFuel(fuel: string){
        this.fuel = fuel;
    }
}


