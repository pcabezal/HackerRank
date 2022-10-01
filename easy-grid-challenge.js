function gridChallenge(grid) {
  let cur = [];
  // alphabetize input strings
  grid.forEach((e,i) => {
      let text = e.split('').sort();
      cur.push(text);
  })

  let len = cur.length;
  for(let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1; j++) {
          if (cur[i][j] > cur[i+1][j]) {
            return 'NO';
          }
      }
  }
  return 'YES';
}


grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
grid2 = ['mpxz',
  'abcd',
  'wlmf']
grid3 = ['abc',
  'hjk',
  'mpq',
  'rtv'

]
// console.log(gridChallenge(grid));
console.log(gridChallenge(grid3));