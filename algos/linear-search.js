// Write code to create a function that takes an array of numbers and a target number and returns the index of the target number in the given array.
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

// console.log(linearSearch([20, 5, 6, 10, 2], 6));
// console.log(linearSearch([20, 6, 6, 10, 6], 6));
// console.log(linearSearch([3, 5, 7, 10, 2], 1));

