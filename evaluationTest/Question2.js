function reverseWords(str) {
    console.log(str);
    return str.split('').reverse().join('');
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversed += str[i];
    // }
    // return reversed;
  
}

// reverseWords("vinay");





const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

