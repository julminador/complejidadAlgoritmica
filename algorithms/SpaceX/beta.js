/**
 * Complejidad Temporal -> O( n^3 )
 */
async function algoritmoBeta(payloadId, payloadAPI) {
  let arreglosCoinciden = (arreglo1, arreglo2) => { // O(1)
      if (arreglo1.length != arreglo2.length) { // O(1)
          return false; // O(1)
      }
      for (let i = 0; i < arreglo1.length; i++) { // O(n)
          if (arreglo1[i] != arreglo2[i]) { // O(1)
              return false; // O(1)
          }
      }
      return true; // O(1)
  };
  let respuesta = await fetch(payloadAPI); // O(1)
  let data = await respuesta.json(); // O(1)
  let payloadIdArray = payloadId.split(''); // O(n)
  for (let i = 0; i < data.length; i++) { // O(n)
      let payloads = data[i].rocket.second_stage.payloads; // O(1)
      for (let j = 0; j < payloads.length; j++) { // O(n)
          if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(''))) { // O(1)
              return true; // O(1)
          }
      }
  }
  return false; // O(1)
}