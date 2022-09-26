function processData(input) {
  let sorted = input.sort();
  let k = (input.length + 1)/2;
  let zigzag = [];
  
  for (let i = 1; i < k; i++) {
      zigzag.push(sorted.shift());
  }
  for (let i = sorted.length - 1; i >= 0; i--) {
      zigzag.push(sorted[i]);
  }
  
  return zigzag;
} 

console.log(processData([1,2,3,4,5,6,7]));
