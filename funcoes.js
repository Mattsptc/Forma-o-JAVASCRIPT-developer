const sayMyName = (name) => {
    console.log(`Your name is ${name}`)
}

sayMyName('Jose')
sayMyName('Victor')

const quadrado = (valor) => {
    console.log(valor * valor)
}

quadrado(10)




function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(1)
}


function classificarIMC(IMC) {

if (IMC < 18.5) {
    return 'Abaixo do peso'
} else if (IMC > 18.5 && IMC < 25) {
    return 'Peso normal'
} else if (IMC > 25 && IMC < 30) {
    return 'Acima do peso'
} else if (IMC > 30 && IMC < 40) {
    return 'Obeso'
} else {
    return 'Obesidade Grave'
}
}

// Funcao imediatamente invocada - Bom pra isolar o codigo e o escopo da funcao
// Bom p codigo que e invocado 1x apenas

// Main
(function () {
    const IMC = calcularIMC(87, 1.70)

    console.log(IMC)
    console.log(classificarIMC(IMC))
})()

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));