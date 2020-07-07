// Write code to create a function that takes an array of numbers, each representing the duration of a song. You will return the maximum number of songs present in the array that can fit into a 60 minute playlist.
function mostSongsInPlaylist(arr) {
    let count = 0;
    let sum = 0;
    for (num of arr) {
        if (num + sum > 60) {
            continue;
        } else {
            sum += num;
            count ++;
        }
    }
    return count;
}

// console.log(mostSongsInPlaylist([4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]));
// console.log(mostSongsInPlaylist([3,10,6,5,2]));
