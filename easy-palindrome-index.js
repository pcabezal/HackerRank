// my too slow code
function palindromeIndex(s) {
  let answer = -1;
  
  // create paladindrome checker function
  function palin(string) {
  let len = string.length;
  if (len % 2 == 0) {
      if (string.slice(0, len/2) == string.slice(len/2).split('').reverse().join('')) return true;
  } else {
      if (string.slice(0, len/2 -.5) == string.slice(len/2 + .5).split('').reverse().join('')) return true;
  }
  return false;
  }
  
  if (palin(s) == true) return answer;
  
  for (let i = 0; i < s.length; i++) {
      let current = s.slice(0, i) + s.slice(i + 1);
      if (palin(current)) return i;
  }

  return answer;
}

// faster code
function palindromeIndex (s) {
    let result = -1;
    const slen = s.length; 
    
    if (slen >= 1 && slen <= 100005 & s !== s.split('').reverse().join('')) {
         for (let i = 0; i < slen; i++) {
              if (s.charAt(i) != s.charAt(slen - 1 - i)) {
                   let s1 = s.substring(0, i) + s.substring((i + 1)); 
                   let s2 = s.substring(0, (slen - 1 - i)) + s.substring((slen - 1 - i) + 1); 
                   
                   if (s1 === s1.split('').reverse().join('')) {
                        result = i;
                   } else if (s2 === s2.split('').reverse().join('')) {
                        result = slen - 1 - i;
                   }                              
                   break;
              } 
         } 
    }
     
    return result;
}