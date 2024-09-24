// Car Constructor
function Car(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// Customer Constructor
function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
}

// Add a method to rent a car
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false; 
        this.rentedCars.push(car);
        return `${car.make} ${car.model} rented successfully by ${this.name}.`;
    } else {
        return `${car.make} ${car.model} is already rented.`;
    }
};

// PremiumCustomer Constructor inheriting from Customer
function PremiumCustomer(name, rentedCars, discount) {
    Customer.call(this, name, rentedCars); // Inheriting properties
    this.discountRate = discount; // Adding discountRate
}

// Use Object.setPrototypeOf() to set the prototype chain
Object.setPrototypeOf(PremiumCustomer.prototype, Customer.prototype);

// Calculate Rental Prices
function calculateRentalPrice(carType, daysRented, customer) {
    let basePrice = 100; // base price for a car
    let dailyRate = basePrice;

    // Adjust daily rate based on car type
    if (carType === 'SUV') {
        dailyRate = 70;
    } else if (carType === 'Sedan') {
        dailyRate = 60;
    }

    // Calculate the total cost
    let totalCost = dailyRate * daysRented;

    // Apply discount if the customer is a PremiumCustomer
    if (customer instanceof PremiumCustomer) {
        totalCost *= (1 - customer.discountRate / 100); // Apply discount correctly
    }

    return totalCost;
}

// Return a rented car
Customer.prototype.returnCar = function (car) {
    const carIndex = this.rentedCars.indexOf(car);
    if (carIndex !== -1) {
        setTimeout(() => {
            car.isAvailable = true; // Mark the car as available again
            this.rentedCars.splice(carIndex, 1); // Remove the car from rentedCars
            console.log(`${car.make} ${car.model} has been returned by ${this.name}.`);
        }, 2000); // Simulate a delay of 2 seconds
    } else {
        console.log(`${this.name} has not rented this car.`);
    }
};

// Simulate car maintenance
function Maintenance(car) {
    setTimeout(() => {
        car.isAvailable = true; // Make the car available again
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, 1000); // Simulate maintenance delay
}

// Creating car objects
const car1 = new Car('Toyota', 'Corolla', 2021, true);
const car2 = new Car('Honda', 'Civic', 2022, true);
const car3 = new Car('Ford', 'Explorer', 2020, true);

// Creating customers
const customer1 = new Customer('John Doe');
const premiumCustomer1 = new PremiumCustomer('Jane Doe', [], 10); // 10% discount

// Renting a car
console.log(customer1.rentCar(car1)); // John rents the car
console.log(premiumCustomer1.rentCar(car2)); // Jane rents a car with a discount

// Calculating rental prices
console.log(`Total price for John: $${calculateRentalPrice('Sedan', 3, customer1)}`);
console.log(`Total price for Jane (Premium): $${calculateRentalPrice('SUV', 5, premiumCustomer1)}`);

// Returning cars
customer1.returnCar(car1); // John returns the car
premiumCustomer1.returnCar(car2); // Jane returns the car after 2 seconds

// Maintenance example
Maintenance(car3); // Ford Explorer will be available after 1 second of maintenance
