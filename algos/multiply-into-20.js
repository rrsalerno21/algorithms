// Write code to create a function that takes an array of unique numbers. Return true if any two numbers can be multiplied into 20, else return false.

function multiplyInto20(arr) {
    for (num1 of arr) {
        for (var i = 0; i < arr.length; i++) {
            if (num1 * arr[i] === 20) {
                return true;
            }
        }
    }

    return false;
}

// console.log(multiplyInto20([20, -20, 18, 2, 3, 4]));
// console.log(multiplyInto20([3, 4, 5, 7, 8]));
