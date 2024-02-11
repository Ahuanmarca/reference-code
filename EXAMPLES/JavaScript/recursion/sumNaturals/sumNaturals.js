function sumNaturals(n, r = 0) {
  if (n <= 0) {
    return r;
  } else {
    return sumNaturals(n - 1, r + n);
  }
}
const output = sumNaturals(4);
