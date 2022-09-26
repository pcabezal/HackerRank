function towerBreakers(n, m) {
  if (m == 1) return 2;
  if (n == 1) return 1;
  return (n % 2 == 0) ? 2 : 1;
}

// fuck that