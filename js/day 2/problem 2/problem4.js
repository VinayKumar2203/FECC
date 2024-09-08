function printArray(n, arr) {
  
    for (let i = 0; i < n; i++) {
        let num = arr[i];
      
        if (num%2==0) {
          console.log(num);
        }
    }
  
}
printArray(5, [1,2,3,4,5])