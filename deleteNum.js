function arrayDiff(a, b) {
  if (b.length == 0 || a.length == 0) return a;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}

function array_diff(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}
function arrayDiff(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let isFound = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      result.push(a[i]);
    }
  }
  return result;
}
