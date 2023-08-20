// Define the Car constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
//getDescription method 
Car.prototype.getDescription = function() {
    return `${this.year} ${this.make} ${this.model}`;
};
//  ElectricCar as a subclass of Car
function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
}
// Inherit 
ElectricCar.prototype = Object.create(Car.prototype);
// getDescription method
ElectricCar.prototype.getDescription = function() {
    return `${this.year} ${this.make} ${this.model} - Range: ${this.range} miles`;
};
// Create an instance of ElectricCar
const teslaModelS = new ElectricCar("Tesla", "Model S", 2019, 300);
// Call getDescription method on the instance
const carDescription = teslaModelS.getDescription();
console.log(carDescription); 
