// forEach function
// countWords--------------------------;
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
];
let result = [];
for (const char of sentences) {
    let countWords = char.split(" ").length;
    let readyOutPut = `sentence  contains ${countWords} words`
    result.push(readyOutPut);
    // console.log()
}

// console.log(result);

//   output should look like this.
// "sentence 1 contains 9 words."
