// En la complejidad espacial se calcula es diferente en cada compilador de cada lenguaje
// mide que variables, arreglos (bidimendionales, tridimencionales), etc. se van creando en el algoritmo
// por ejemplo cada vez que avanza el algoritmo se asigna mas espacio.

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repetir(arreglo) {
  let arregloRepetido = arreglo;
  return arregloRepetido;
}

function convertrAString(arreglo) {
  let resultado = arreglo.map(elemento => elemento.toString());
  return resultado;
}

function dosDimenciones(valor) {
  let x = new Array(valor);
  for (let i = 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0);
  }
  return x;
}

console.log(dosDimenciones(5));