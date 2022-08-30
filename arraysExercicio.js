// 1) Crie um programa que dado um número imprima a sua tabuada.
let number = 8
let array = []
for (let i = 1; i <= 10; i++) {
    const multiplicar = number * i;
    array.push(multiplicar)
    
}

console.log(array)

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);



// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const names = ['jose', 'vitor', 'vinicius', 'mario', 'vanessa']
let namesComV = []
for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'v') {
        namesComV.push(names[i])
        
    };
    
}

console.log(namesComV)


// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numerosParesAcimade10 = [];

for (let i = 10; i <= 50; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosParesAcimade10.push(i);
    }
}

console.log(numerosParesAcimade10);

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   // Ex de lista = [2, 7, 3, 8, 10, 4]

const listaDeMedias = [2, 3, 4, 5, 6, 6, 6, 6, 4, 2, 9, 9, 2]
let recuperacao = []
    for (let index = 0; index < listaDeMedias.length; index++) {
        if (listaDeMedias[index] < 5) {
            recuperacao.push(listaDeMedias[index])
        };
        
    }
console.log(recuperacao)

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
  //  Ex de lista de notas = [2, 7, 3, 8, 10, 4]

    const listaDeNotas = [ 2, 3, 4, 2, 4, 5, 10, 2, 8, 5, 7]
    let maiorNota = 0
    for (let index = 0; index < listaDeNotas.length; index++) {
        if (listaDeNotas[index] > maiorNota) {
            maiorNota = listaDeNotas[index];
        }
            
        }

console.log(maiorNota)
