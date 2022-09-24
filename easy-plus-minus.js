function plusMinus(arr) {
    // establish variables
    let len = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;
    
    // iterate over the array to establish variable values
    arr.forEach( num =>  {
        if (num > 0) {
            pos++;
        } else if (num < 0) {
            neg++;
        } else {
            zero++;
        }
    })
    
    // convert variables to the format we want to output
    
    console.log(pos/len, '\n', neg/len, '\n', zero/len);
}
