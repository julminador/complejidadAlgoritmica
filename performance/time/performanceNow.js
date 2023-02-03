// performance.now() mide el tiempo entre dos lineas de codigo en milisegundos

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let inicioTiempo = performance.now();
contar(500000);
let finalTiempo = performance.now();
let duracion = finalTiempo - inicioTiempo;
console.log(duracion);