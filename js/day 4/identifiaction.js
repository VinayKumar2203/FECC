// ------------------identify Type Using ------------------------
function identifyType(value) {
    // console.log(typeof(value));
}
identifyType("45")

// --------------Check Object VS Array---------------------------------

function isArrayOrObject(value) {
    // console.log(` ${Array.isArray(value)}`)
    // console.log(` type ${typeof(value)}`)
}
let arrObj = {};
isArrayOrObject(arrObj);

// ------------------------complex type indentification----------------------
function identifyComplexType(values) {
    console.log("type of value " + typeof (values))
    console.log("this is a array " + Array.isArray(values))
    console.log("Is it an instance of Object " + (values instanceof Object));
    console.log("Is it an instance of Array " + (values instanceof Array));

    class CustomClass { };
    let obj = new CustomClass();
    console.log("Is obj an instance of CunstomClass?" + (obj instanceof CustomClass));
}
identifyComplexType(52);
identifyComplexType([1, 2, 3, 4]);
