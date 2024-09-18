function countWords(sentences) {
    sentences.forEach((sentence, index) => {
      const words = sentence.split(" ").filter((word) => word !== ""); // Split the sentence into words and remove empty strings
      console.log(`Sentence ${index + 1} contains ${words.length} words.`);
    });
  }
  
  // Example usage:
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  countWords(sentences);
  