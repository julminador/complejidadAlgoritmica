/**
 * Complejidad Temporal -> O( n )
 */
async function algoritmoDelta(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI); // O(1)
  let data = await respuesta.json(); // O(1)
  let listaDePayloads = []; // O(1)
  let longitudData = data.length; // O(1)

  for (let i = 0; i < longitudData; i++) { // O(n)
      let payloads = data[i].rocket; // O(1)
      listaDePayloads.push(...payloads.second_stage['payloads']);
  }

  for (let i = 0; i < listaDePayloads.length; i++) { // O(n)
      let localPayloadId = listaDePayloads[i].payload_id; // O(1)
      if (localPayloadId == payloadId) { // O(1)
          return true; // O(1)
      } else {
          return false; // O(1)
      }
  }
}