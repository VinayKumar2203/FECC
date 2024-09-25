// Q:11
function Product(name,price,quantity) {
    this.name=name;
    this.price=price;
    this.quantity=quantity;

}

// ProductType
function Electronics(name,price,quantity,brand,model) {
    Product.call(this,name,price,quantity);
    this.brand=brand;
    this.model=model;

}
// method of electronics===
Electronics.prototype.powerOn=function () {
    console.log("powerOn");
}
Electronics.prototype.powerOff=function () {
    console.log("powerOff");
}

function Clothing(name,price,quantity,size,color) {
    Product.call(this,name,price,quantity);
    this.size=size;
    this.color=color;

}
Clothing.prototype.wear=function () {
    console.log("wear");
}

// book is starting..........
function Books(name,price,quantity,author,genre) {
    Product.call(this,name,price,quantity);
    this.author=author;
    this.genre=genre;
}
Books.prototype.read=function () {
    console.log("read");
}
// Product ke method addStock removeStock
Product.prototype.addStock=function() {
    console.log('addStock');
};
Product.prototype.removeStock=function () {
    console.log('removeStock');
};

// Object.setPrototypeOf(Electronics.prototype,Product.prototype);
// Object.setPrototypeOf(Clothing.prototype,Electronics.prototype);
// Object.setPrototypeOf(Books.prototype,Clothing.prototype);


// Electronics.prototype = Object.create(Product.prototype);
// Electronics.prototype.constructor = Electronics;

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

