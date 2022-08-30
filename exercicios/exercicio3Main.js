
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./exercicio3');

const salario = gets()
console.log(salario)
const adicional = gets()
console.log(adicional)

// criei uma funcao para calcular 
let calcularSalarioLiquido = (salario, adicional) => {
    if (salario < 1100.00) {
        return salario = ((salario * 95) / 100) + adicional
    } else if (salario > 1100.01 && salario <= 2500.00) {
        return salario = ((salario * 90) / 100) + adicional
    } else {
        return salario = ((salario * 85) / 100) + adicional
    }
}

console.log(calcularSalarioLiquido(2000, 250))
