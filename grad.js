function proximoMultiploDe5(calificacion) {
  const residuo = calificacion % 3;
  console.log(residuo);
  if (residuo === 0) {
    // Si la calificación ya es múltiplo de 5, no se requiere redondeo
    return calificacion;
  } else {
    // Calculamos el siguiente múltiplo de 5
    const proximoMultiplo = calificacion + (5 - residuo);
    return proximoMultiplo;
  }
}

// Ejemplo de uso
console.log(proximoMultiploDe5(7)); // Devuelve 75
