// identify statement vs Expression -----------------------------
// statement are left hand side 
// expression in javaScript in right hand side 
for (let i = 0; i < 5; i++) {
    // console.log(2+2);
    
}
// ----------------expressio in Function--------------
function expressionInFunction(a,b) {
    if (a>b) {
        return a-b;
    }
    else if (b<a) {
        return a+b;
    }
    else{
        return a+b;
    }
}
let expInFun=expressionInFunction(8,5);
console.log(expInFun);


// ----------------complex expressio in Condition--------------
function complexExpression(a,b,c) {
    if (a>b) {
        return a-b;
    }
    else if (b<a) {
        return a+b;
    }
    else if (a==b&&b==c) {
        return (a+b)*c;
    }
    else{
        return a+b+c;
    }
}
let compExpFun=complexExpression(8,5,5);
console.log(compExpFun);