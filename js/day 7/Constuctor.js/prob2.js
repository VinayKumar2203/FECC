// question 7;
// we can use call() ,apply() in this constructor fun

function iPhone3(ASIN,color,display,camera,bluethoth) {
    let obj={};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.bluethoth=bluethoth;

    obj.dial=function() {
        return  `tring.. tring..`;
    }
    obj.sendMessage=function() {
        return  `sendign message.. `
    }
    obj.cameraClick=function() {
        return `camera clicked`;

    }
    obj.connectBluetooth=function() {
        return `Bluetooth connected successfully...`
    }
   return obj;
} 

let i3 = {};
let val1= iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
// ---- properties

// iPhone3.call(i3,)
// console.log(val1.ASIN)//i am testing that is is right or wrong


console.log(val1.ASIN);
console.log(val1.color); 
console.log(val1.display); 
console.log(val1.camera);
console.log(val1.bluetooth); 

// ---- methods
console.log(val1.dial()); 
console.log(val1.sendMessage());
console.log(val1.cameraClick()); 
console.log(val1.connectBluetooth());
