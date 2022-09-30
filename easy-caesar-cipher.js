function caesarCipher(s, k) {
  let encoded = '';
  k = k % 26;

  for (let i = 0; i < s.length; i++ ) {
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      let newCode = code + k;  
      if (newCode > 90) newCode -= 26;
      encoded += String.fromCharCode(newCode)
    } else if (code >= 97 && code <= 122) {
      let newCode = code + k;  
      if (newCode > 122) newCode -= 26;
      encoded += String.fromCharCode(newCode)
    } else {
      encoded += s[i];
    }
  }

  return encoded;
}

console.log(caesarCipher('There', 3));

console.log(12%5);