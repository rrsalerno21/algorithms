// Write code to create a function that takes in a 2-dimensional array and searches each 2D element for the character "X".
function arraySearch2D(arr) {
    let count = 0;
    for (subarr of arr) {
        for (ele of subarr) {
            if (ele === 'X') {
                count ++
            }
        }
    }

    return count;
}

// var testArr = [
//     ["X", "O", "O", "O", "X", "O"],
//     ["O", "X", "O", "O", "O", "O"],
//     ["O", "O", "O", "O", "X", "X"],
//     ["O", "O", "O", "O", "O", "O"]
// ]  

// console.log(arraySearch2D(testArr));