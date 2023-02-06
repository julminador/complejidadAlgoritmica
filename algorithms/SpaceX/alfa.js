/**
 * Complejidad Temporal -> O( n^2 )
 */
async function algoritmoAlfa(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI); // O(1)
  let data = await respuesta.json(); // O(1)
  for (let i = 0; i < data.length; i++) { // O(n)
      let payloads = data[i].rocket.second_stage['payloads']; // O(1)
      for (let j = 0; j < payloads.length; j++) { // O(n)
          if (payloadId == payloads[j].payload_id) { // O(1)
              return true; // O(1)
          }
      }
  }
  return false; // O(1)
}