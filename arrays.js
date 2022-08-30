const alunos = ['Joao', 'Pedro', 'Victor']

alunos.push('joana') // add no fim
alunos.pop() // retira no fim
alunos.shift() // retira no inicio

alunos.unshift('zezin') // add no inicio
console.log(alunos)

const notas = []


notas.push(8);
notas.push(7);
notas.push(5);
notas.push(6);
notas.push(9)

console.log(notas.length)
let soma = 0
for (let i = 0; i < notas.length; i++) {
    
    const nota = notas[i];
    soma = soma + nota;

    
}
const media = soma / notas.length
console.log(media)
console.log(soma)

const nome = 'vitor johasen junior'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)   
}