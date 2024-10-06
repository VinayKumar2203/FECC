function countVowelsAndConsonants(str) {
       let  obj={};
    let getVal = str.toLowerCase();
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < getVal.length; i++) { 
        let ele=getVal[i].trim();
        if (ele == "a" || ele == "e" || ele == "i" || ele == "o" || ele == "u") {
            vowels++;
            obj['vowels']=vowels;
        }
        else {
            consonants++;
            obj['consonants']=consonants;
        }
    }
   
    return obj;
    // console.log(obj);
}


const result = countVowelsAndConsonants("Hello World");
console.log(result);



// Output: { vowels: 3, consonants: 7 }

