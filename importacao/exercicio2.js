const entrada = [4, 100, 150, 90, 200];
let i = 0;

function gets() {
const valor = entrada[i];
i++;
return valor;

}

function print(texto) {
console.log(texto);
}

module.exports = {gets, print}

/* 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.
*/