function esPalindromoArray(arr) {
    function esPalindromo(cadena) {
      const limpiaCadena = cadena.toLowerCase().split(' ').join('');
      const longitud = limpiaCadena.length;
      
      for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (limpiaCadena[i] !== limpiaCadena[longitud - 1 - i]) {
          return false;
        }
      }
      
      return true;
    }
  
    const resultados = [];
    for (let i = 0; i < arr.length; i++) {
      resultados.push(esPalindromo(arr[i]));
    }
  
    return resultados;
  }
  
  // Ejemplo de uso
  const palabras = ["anita lava la tina", "oso", "hola", "reconocer"];
  console.log(esPalindromoArray(palabras));
  // Devuelve [true, true, false, true]
  