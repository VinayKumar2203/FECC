function Animal() {
    this.type="animail";    
}

Animal.prototype.sound=function() {
 return `Animal  sound.`

}
let a1=new Animal();
console.log(a1.sound())


function Dog() {
  Animal.call(this) 
    this.type='dog';
}

Dog.prototype.sound=function () {
    return `Bark`;
}
let d1=new Dog();
console.log(d1);

// Dog.prototype=Object.create(Animal.prototype)