function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let len = matrix.length;
    let max;
    let total = 0;
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        max = Math.max(
          matrix[x][y],
          matrix[x][len - 1 - y],
          matrix[len - 1 - x][y],
          matrix[len - 1 - x][len - 1 - y]
        );
  
        total += max;
      }
    }
  
    return total;
}