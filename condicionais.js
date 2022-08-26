// Professor fez o exercicio retornando boolean - decidi por fazer de outra maneira

const numeroEPar = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`)
    } else { 
        console.log(`${numero} é impar`)

    }
}

numeroEPar(11)

// Desafio

const precoEtanol = 3.75
const precoGasolina = 5.32
const gastoMedioEtanol = 9.32
const gastoMedioGasolina = 13.43
const distanciaPercorrida = 3092
const combustivelUtilizado = 'gasolina'

const calculaGastoDaViagem = () => {
    if (combustivelUtilizado === 'etanol') {
        let combustivelGasto = distanciaPercorrida / gastoMedioEtanol
        let valorGasto = precoEtanol * combustivelGasto
        console.log(`O valor gasto na viagem foi R$ ${valorGasto.toFixed(2)}`)
    } else  {
        let combustivelGasto = distanciaPercorrida / gastoMedioGasolina
        let valorGasto = precoGasolina * combustivelGasto
        console.log(`O valor gasto na viagem foi R$ ${valorGasto.toFixed(2)}`)
    }
}

calculaGastoDaViagem()