function minimumBribes(q) {
  let totalBribes = 0;
  let p1 = 1;
  let p2 = 2;
  let p3 = 3;
  for (let i = 0; i< q.length; i++) {
      if (q[i] == p1) {
          p1 = p2;
          p2 = p3;
          p3++
      } else if (q[i] == p2) {
          ++totalBribes;
          p2 = p3;
          p3++
      } else if (q[i] == p3) {
          totalBribes += 2;
          p3++;
      } else {
          return console.log('Too chaotic');
      }
  }
  console.log(totalBribes)
}
