// Write code to create a function that takes an array and reverses the array in place without using the built-in reverse method.
function reverseInPlace(arr) {

    for (var i = 0, j= 1; i < (arr.length/2); i++, j++) {
        let begEl = arr[i];
        let endEl = arr[arr.length - j]

        arr[i] = endEl;
        arr[arr.length - j] = begEl;
        console.log(arr);
    }

    return arr;
}

// console.log(reverseInPlace(['hey', 'I', 'like', 'cookies', 12, false]));
// console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']));

