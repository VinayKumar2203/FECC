// Scope Comparison----------------------------;
function testVar() {
    var varName = 'vinay';
    // console.log(varName);
}
// console.log(varName);
testVar()

function testLet() {

    let letName = "krishan g"
    //   console.log(letName);
}
testLet();

// constant Varibles-----------------------------;
function createConstantArray() {
    const array = [1, 2, 3, 4, 5, 6, 7];
    array.push(8, 9, "vinay");
    // array=["radha rani"]  /*i try too reassign the value*/
    // console.log(array);
}
createConstantArray();

// Temporal Dead Zone----------------------------------;
function demostrateTDZ() {
    // console.log(varTest);
    // console.log(letTEST);


    let letTEST = "hello let testing";
    var varTest = "hello var testing";
}
demostrateTDZ()

// Re-declaration of Variables:-------------------------
function testRedeclaration() {
    var definition="Variables declared with var can be redeclared within the same scope without any issues.";
    let letdefine="let can not be re-declared ";
    const costdefine="const also can not be re-declared";
    // console.log(definition);
    // console.log(letdefine);
    // console.log(costdefine);
}
testRedeclaration();

// Block scope and loop------------------------------
function loopWithVarAndLet() {
    // when i assign a let i can no access i after the loop we found undefiend;
    for (let i = 1; i <= 5; i++) {
        console.log("this number is " +i);
        
    }
    console.log("let  finesh loop "+i);

    // when i used var in the loop we can found access i value after the loop and i value will be increase;

    for (var i = 1; i <= 5; i++) {
        console.log("this number is " +i);
    }
    console.log("this is after the var loop i "+i)
}
loopWithVarAndLet()