function lonelyinteger(a) {
    // sort array
    let sorted = a.sort((a,b) => a - b);

    // iterate through the array, checking if the next value is the same as previous value, skipping ahead if so, returning if not.
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == sorted[i+1]) {
            i++;
        } else {
            return sorted[i];
        } 
    }
}