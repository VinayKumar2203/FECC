// question 6;
function iPhone1(ASIN, color, display, camera) {
    let bulk = {};
    bulk.ASIN = ASIN;
    bulk.color = color;
    bulk.display = display;
    bulk.camera = camera;

    bulk.dail = function() {
        return "Tring..Tring...";
        // console.log("Tring..Tring...")
    }
    bulk.sendMessage = function() {
        return "Sending message";
        // console.log( "Sending message")
    }
    bulk.cameraClick = function() {
        return "Camera Clicked..";
        // console.log("Camera Clicked..");
    }
    return bulk;
}


let i1 = iPhone1(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP"
);
//   ---- properties
// console.log(i1.ASIN);
// console.log(i1.color); 
// console.log(i1.display);
// console.log(i1.camera); 

//   ---- methods
// console.log(i1.dail()); 
// console.log(i1.sendMessage()); 
// console.log(i1.cameraClick()); 


/*
Problem2:factory function iPhone2----------------
*/
function iPhone2(ASIN,color,display,camera,bluetooth) {
    let obj={};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.bluetooth=bluetooth;

    obj.dial=function() {
        return "tring.. tring.."
    }
    obj.sendMessage=function() {
        return "Sending message...."
    }
    obj.cameraClick=function() {
        return "Camera clicked...."
    }
    obj.connectBluetooth=function() {
        return "bluetooth connected successfully.."
    }
    return obj;
}

let i2 = iPhone2(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
  );
//   ---- properties
  console.log(i2.ASIN); // 1
  console.log(i2.color); // "B09X67JBQV"
  console.log(i2.display); // 7.8
  console.log(i2.camera); // "IOS"
  console.log(i2.bluetooth); // "128GB"
  
//   ---- methods
  console.log(i2.dial()); // "tring.. tring..."
  console.log(i2.sendMessage()); // "Sending message..."
  console.log(i2.cameraClick()); // "Camera clicked"
  console.log(i2.connectBluetooth()); //"Bluetooth connected successfully..."
  