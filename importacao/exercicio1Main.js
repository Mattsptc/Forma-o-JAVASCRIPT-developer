const { getss, prints } = require('./exercicio1')

let numero =  getss();
let array = []
for (let i = 1; i <= 10; i++) {
    const multiplicar = numero * i;
    array.push(multiplicar)
    console.log(`${numero}x${i} = ${multiplicar}`)
    
}