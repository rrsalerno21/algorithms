// Write code to create a function that takes an array of numbers, finds the largest two numbers in the array, and returns the product of both numbers.
function productOfLargestTwo(arr) {
    let num1 = arr[0];
    let num2 = arr[1];

    for (curNum of arr) {
        if (curNum >= num1) {
            num1 = curNum;
        }

        if (curNum >= num2 && curNum < num1) {
            num2 = curNum
        }
    }

    return num1 * num2
}

// console.log(productOfLargestTwo([10, 7, 5, 24, 3]))