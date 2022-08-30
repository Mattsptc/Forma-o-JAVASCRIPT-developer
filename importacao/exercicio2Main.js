const {gets, print} = require('./exercicio2')

const numerosSorteados = []
    for (let index = 0; index < 5; index++) {
        const numeroSorteado = gets();
        numerosSorteados.push(numeroSorteado);
  
        
    }
    let menorValor = 1000
    let maiorValor = 0
    for (let i = 0; i < numerosSorteados.length; i++) {
        let numeroSorteado = numerosSorteados[i];
        if (numeroSorteado > maiorValor) {
            maiorValor = numeroSorteado;
            
        } 
    }
    
    for (let i = 0; i < numerosSorteados.length; i++) {
        let numeroSorteado = numerosSorteados[i];
        if (numeroSorteado < menorValor) {
            menorValor = numeroSorteado;
        }
    }
            

    console.log(maiorValor)
    console.log(menorValor)
