function suma(nums, num) {
  const sumado = new Map();

  for (let i = 0; i < nums.length - 1; i++) {
    const element = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const element2 = nums[j];
      if (element + element2 === num) {
        return [i, j];
      }
    }
    return null;
  }
}
console.log(suma([2, 13, 43, 1, 4, 7, 35, 3], 76));

function encuentraSumaObjetivo(nums, objetivo) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complemento = objetivo - nums[i];
    if (numMap.has(complemento)) {
      return [numMap.get(complemento), i];
    }
    numMap.set(nums[i], i);
  }
  return null;
}

// Ejemplo de uso
console.log(encuentraSumaObjetivo([2, 7, 11, 15], 9)); // Devuelve [0, 1]
