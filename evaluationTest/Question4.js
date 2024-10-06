function deepCopy(obj) {
  
   return JSON.parse(JSON.stringify(obj));

}

const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  const copy = deepCopy(obj);
  console.log(copy);
  // Output: { name: "John", address: { city: "New York", zip: 10001 } }
  
  