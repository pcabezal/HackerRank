function miniMaxSum(arr) {
    // sort array in ascending order
    let sorted = arr.sort((a,b) => a - b);

    // calculate min my summing arr without max num
    let minSum = arr.slice(0, -1).reduce((p,c) => p + c, 0)

    // calculate max by summing arr without min num
    let maxSum = arr.slice(1).reduce((p,c) => p + c, 0)
       
    // output results
    console.log(`${minSum} ${maxSum}`)
}