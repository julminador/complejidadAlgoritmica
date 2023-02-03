// console.time() mide el tiempo entre dos lineas de codigo en milisegundos pero no es tan preciso como performance.now()
function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time('duracion contar');
contar(500000);
console.timeEnd('duracion contar');