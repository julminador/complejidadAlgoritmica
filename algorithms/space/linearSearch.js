/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 * Espacio Auxiliar -> O( 1 )
 */
function linearSearch(arreglo, clave) { // O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}