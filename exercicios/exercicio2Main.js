// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./exercicio2');

const elements = []
const par = []
const impar = []
let maiorEhPar = 0
let menorEhImpar = 10000
for (let index = 0; index < 6; index++) {
    const element = gets();
    elements.push(element)
    if (element % 2 == 0) {
        par.push(element)
}   else if (element % 2 != 0) {
    impar.push(element)
}
}    
for (let i = 0; i < par.length; i++) {
    if (par[i] > maiorEhPar)
    maiorEhPar = par[i]
    
}
for (let i = 0; i < impar.length; i++) {
    if (impar[i] < menorEhImpar) {
        menorEhImpar = impar[i]
    }
    
}
console.log(par)
console.log(impar)
console.log(elements)
console.log(maiorEhPar)
console.log(menorEhImpar)
