// filter Function :::::::
// palindromes String----------

const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];

  let result=[];
  for (const String of words) {
    //  console.log(String);

    let palindromes= String.split("").reverse().join("")
  
   words.filter((item)=>{
    if (item ===palindromes) {
        result.push(item)
    }
   })
  }
  console.log(result);
  
//   ["racecar", "deified", "level", "radar", "civic"];
