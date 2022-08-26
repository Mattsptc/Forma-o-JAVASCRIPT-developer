const distancia = 1320
const consumoMedio = 10.3
const precoEtanol = 3.78

const combustivelGastoNaViagem = 1320 / 10.3
const valorGasto = precoEtanol * combustivelGastoNaViagem
console.log(`Foi gasto na viagem R$ ${valorGasto.toFixed(2)} reais`)