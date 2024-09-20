class Iphone4 {
    constructor(ASIN,color,display,camera,bluetooth){
       this.ASIN=ASIN;
       this.color=color;
       this.display=display;
       this.camera=camera;
       this.bluetooth=bluetooth;
    };
    dial(){
        return `tring.. tring..`;
    };
    sendMessage(){
        return` send message`;
    };
    cameraClick(){
        return `camera clicked`;
    };
    connectBluetooth(){
        return`bluetooth connected successfully`;
    };
}

let i4 = new Iphone4(
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
  console.log(i4.ASIN); // 1
  console.log(i4.color); // B09X67JBQV
  console.log(i4.display); // 7.8
  console.log(i4.camera); // IOS
  console.log(i4.bluetooth); // 128mb
  
//   ---- methods
  console.log(i4.dial()); // "tring.. tring..."
  console.log(i4.sendMessage()); // "Sending message..."
  console.log(i4.cameraClick()); // "Camera clicked"
  console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
  