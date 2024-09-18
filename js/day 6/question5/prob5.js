// Reduce Function ---------------
// UniqueString------------------:

function UniqueString(strings) {
    return strings.reduce((acc, string) => {
      acc[string] = (acc[string] || 0) + 1;
      return acc;
    }, {});
  }
  
  const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
  
 let uniString= UniqueString(strings) ;
 console.log(uniString);
  