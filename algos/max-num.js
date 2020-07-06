function maxNum(arr) {
    let maxVal;
    let lastArrayComp = arr.length - 2;

    for (var i = 0; i <= lastArrayComp; i++) {
        console.log(arr[i+1]);
        if (arr[i] >= arr[i+1]) {
            maxVal = arr[i]
        }
    }

    console.log(maxVal);
}

// maxNum([3,1,17,5,6]);