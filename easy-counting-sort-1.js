function countingSort(arr) {
    // make our counter array and fill it with zeroes
    let count = new Array(100).fill(0);
    
    // iterate over input array to add values to counter array with for loop
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        count[value]++;
    }
    
    return count;
}