const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  let result=[];
  
  strings.map((item,index)=>{
    let itemMap= item.split("").reverse().join('')
    // console.log(itemMap);
    result.push(itemMap);
  })
console.log(result);
//   ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"];
