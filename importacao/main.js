const {gets, print} = require('./getsEprints');



/* Uma sala contem 5 alunos e para cada aluno foi sorteado numero de 1 - 100
Faca um programa q receba os 5 numeros sorteados e mostre o maior valor

Dados de entrada: 
5
50
10
98
23

Saida:
98
*/
const numerosSorteados = []
    for (let index = 0; index < 5; index++) {
        const numeroSorteado = gets();
        numerosSorteados.push(numeroSorteado);
  
        
    }

    let maiorValor = 0
    for (let i = 0; i < numerosSorteados.length; i++) {
        let numeroSorteado = numerosSorteados[i];
        if (numeroSorteado > maiorValor) {
            maiorValor = numeroSorteado;
            
        }
        
    }
    console.log(maiorValor)



