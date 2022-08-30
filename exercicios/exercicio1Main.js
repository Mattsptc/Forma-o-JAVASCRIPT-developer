const { getss, prints } = require('./exercicio1')

// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação


nota = getss()
if (nota < 5) {
    console.log('Reprovado')
} else if (nota >= 5 && nota < 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}

