// question 11----------

class Car {
    constructor(name, accelerationPower, brakingPower, speed, fule) {
        this.name = name;
        this.accelerationPower = accelerationPower;
        this.brakingPower = brakingPower;
        this.speed = speed;
        this.fule = fule;
    }
    accelerate() {
        if (this.speed > 0 && this.fule > 0) {
            return `Accelerating .${this.speed++} ${this.fule--}`
            // console.log(this.speed++);
        }
        else{
            return `you can drive because because fule is not enough `
        }
    };
    break() {
        if (this.speed > 0 ) {
            return `Break applied ${this.speed--} ${this.fule--}`
        }

    };
    CheckSpeed() {
        return `${this.speed} checkspeed`;
    }
    refule() {
        if (this.fule <= 10) {
            return `${this.fule++} refule fule capitcity is 10`
        }
    };
    Fule() {
        if (this.fule <= 0) {
            return `car is stop ${this.fule} `
        }
    }
    drive() {
        if (this.fule <= 0) {

            return `speed:-${this.speed} fule loss:-${this.fule--} checkSpeed ${this.speed} `
        }
        else{
            return `don't not drive fule is not enough`
        }

    }

}
let vCAR = new Car("BMW", 10, 5, 50, 6)
let obj = {};

// these are methood=-----------
console.log(vCAR.CheckSpeed())//it is working
console.log(vCAR.refule())// rufule is aslo working..
console.log(vCAR.refule())
console.log(vCAR.break())// it is also working
console.log(vCAR.accelerate())//it is  working...
console.log(vCAR.drive())//it is  working...

