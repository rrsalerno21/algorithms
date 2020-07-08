// Write code to create a function that takes in two sorted arrays of numbers and merges the contents of both arrays into one new sorted array. You may not use the built in sort method for this activity.

function mergeStored(arr1, arr2) {
    let combinedArray = [...arr1, ...arr2];
    let resultArr = [];

    // loop through combinedArray with a while loop
    while (combinedArray.length > 1) {
        // find the smallest value in combinedArray
        let smallest = findSmallestElement(combinedArray);
        console.log(`smallest value: ${smallest.small}`)
        // push that value to resultArr
        resultArr.push(smallest.small);

        // splice that value out of our combinedArray
        combinedArray.splice(smallest.index, 1);
        console.log(combinedArray);
    }

    return resultArr;
}

function findSmallestElement(arr) {
    // define our smallest val
    let smallestVal = arr[0];

    // loop through array
    for (num of arr) {
        if (num < smallestVal) {
            smallestVal = num;
        }
    }
    return {
        small: smallestVal,
        index: arr.indexOf(smallestVal)
    }
};


// var arr1 = [4, 8, 15, 16, 23, 42];
// var arr2 = [1, 2, 3, 6, 20, 21];

// console.log(findSmallestElement(arr1))

// console.log(mergeStored(arr1, arr2));