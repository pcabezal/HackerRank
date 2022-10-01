function superDigit(n, k) {
  console.log(n);
  // establish superdig function
  function superDig(num) {
    let poop = Array.from(String(num)).map(str => Number(str));
    console.log(poop);
    let feces = poop.reduce((p,c) => p + c);
    console.log(feces);
    return feces;
  }

  //call function k times (or until superdig is one digit)
  let number = n;
  for (let i = 0; i < k; i++) {
      number = superDig(number)
      if (number < 10) break;
  }
  
  return number;
}


// console.log(Array.from(String(987598759875985)).map(str => Number(str)));




function superDigit(n, k) {
  n = n.split("").reduce((a, b) => +a + +b) * k + "";
  return (n.length > 1) ? superDigit(n, 1) : n
}

console.log(superDigit('9875', 4));
