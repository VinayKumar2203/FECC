// filter function-------------------------;
function palindromesString(words) {
    return words.filter((word) => word === word.split("").reverse().join(""));
  }
  
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
  console.log(palindromesString(words)); // Output: ["racecar", "deified", "level", "radar", "civic"]
  