function ProductOfMultipleOfThreeOrFive(numbers) {
    return numbers.reduce(
      (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc + num : acc),
      0
    );
  }
  
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  console.log(ProductOfMultipleOfThreeOrFive(numbers)); // Output: 1817
  