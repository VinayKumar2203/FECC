// Qestion 3 check palindrom;
function isPalindrome(str) {
    // console.log(str);
    let j=str.length-1;
    let bag='';
    for (let i = str.length-1; i >0; i--) {
       let ele= bag+=str[i];
    //    console.log(str[j])
       if (str[j]!==str[i]) {
        return false;
       }
       else{
        return true;
       }
        
    }
    // console.log(bag)
}

isPalindrome("A man, a plan, a canal, Panama")
const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true

