function Car(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// create a constructor function for customer
function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
}

//Add a method---------------
Customer.prototype.Car = function () {
    this.isAvailable == true ? `mark` :`car is already rented`
} 

// 4
function PremiumCustomer(name,rentedCars,discount) {
    Customer.call(this,name,rentedCars);
    this.discount=discount;
}

function CalculateRentalPrices() {
    
}