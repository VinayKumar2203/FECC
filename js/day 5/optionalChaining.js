// Basic Optional Chaining:-----------------------------------------
function getUserCity(user) {
    // console.log(user?.address?.city);
}
let user={
    address:{
        city:"bulandshahr",
    }
}
getUserCity(user)

// Optional Chaining with Arrays:-------------------------------
function getFirstFriend(user) {
    // console.log(user?.[0])
}
let firstFriends=["vinay","laddu","krishana","ram"] 
    

getFirstFriend(firstFriends);

// Optional Chaining with Function Calls:-----------------------------------
function callOptionalMethod(obj) {
    return obj?.greet()
}
let callOptional={
    greet:function () {
        return "hello ! greet";
    }
}
let optWithFun= callOptionalMethod(callOptional);
console.log(optWithFun);

// Optional Chaining with nested Objects ;----------------------------------------
function gerNestedProperty(obj) {
    return obj?.a?.b?.c?.d?.city
}
let deepNested={
    a:{
        b:{
            c:{
                d:{
                    city:"Bulandshahr",
                }
            }
        }
    }
}

let deepOptionalChaining=gerNestedProperty(deepNested);
console.log(deepOptionalChaining);

// Optional chaining with default values:-------------------------------------
function gerNestedProperty2(obj) {
    return obj?.a?.b?.c?.d?.city
}
let deepNested1={
    a:{
        b:{
            c:{
                d:{
                    
                }
            }
        }
    }
}

let deepOptionalChaining2=gerNestedProperty2(deepNested1);
console.log(deepOptionalChaining2);
