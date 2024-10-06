function rearrangeFruits(fruits) {
   let edit= fruits.slice(-4);
    console.log(edit)
    let withOut=fruits.splice(-4,4)
    console.log(withOut);
    let afterEdit=fruits.unshift(...edit);
    console.log(afterEdit);
    return fruits;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
console.log(rearrangeFruits(fruits));

// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

