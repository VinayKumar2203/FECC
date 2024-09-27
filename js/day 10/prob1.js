// Array Filtering with callback functions
let numbers = [1, 5, 8, 7, 4, 1, 5, 8, 7, 14];

// ------------------this is a filterarraya function---------------

function filterArray(arr, callback) {
    let result = arr.filter((ele) => {
        if (ele % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    });

    callback(result);
};

// here this is a callBack function----------------------

function callback(num) {
console.log(num);
}

filterArray(numbers, callback);