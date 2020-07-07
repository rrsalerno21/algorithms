// Write code to create a function that takes an array of numbers. Return true if no number appears more than once in the given array, else return false.
function isUnique(arr) {
    let obj = {};

    for (var i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        if (!obj[curNum]) {
            obj[curNum] = true;
            continue;
        }

        return false;
    }

    return true;
}

// console.log(isUnique([1, 2, 3]));
// console.log(isUnique([1, 2, 3, 3]));
// console.log(isUnique([1, 1, 3, 1]));

