class Pessoa {
    nome;
    idade;
    anoDeNascimento
    constructor(nome, idade) { // bindar o this faz com que estes parametros sejam obrigatorios
        this.nome = nome;
        this.idade = idade; // se n for passado parametros o obj recebera esses parametros padroes
        this.anoDeNascimento = 2022 - idade
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e nasci no ano de  ${anoDeNascimento}`)
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(` ${p1.nome} é mais velha que ${p2.nome}`)
    } else if (p1.idade === p2.idade) {
        console.log("Ambos tem a mesma idade")
    } else {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    }
}

let josepio = new Pessoa ('Josepio', 34)
let zezin = new Pessoa ('Zezin', 31)

compararPessoas(josepio, zezin) 

/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.



class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;

        
    }
    gastoDaViagem(distancia, precoDoCombustivel) {
        return distancia * this.gastoMedio * precoDoCombustivel;
    }
}

const mercedezA320 = new Carro('Mercedez', 'branco', 0.14)



let mercedao = mercedezA320.gastoDaViagem(1000, 4)
console.log(mercedao)

const palio = new Carro('Palio', 'preto', 0.08)
let palioGasto = palio.gastoDaViagem(650, 4.19).toFixed(2)
console.log(palioGasto)

/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; 
*/

class PessoasCadastradas {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        let IMC = this.peso / (this.altura * this.altura)
        if (IMC < 18.5) {
            return (`Meu IMC é ${IMC.toFixed(2)} e estou abaixo do peso`)
        } else if (IMC > 18.5 && IMC < 25) {
            return (`Meu IMC é ${IMC.toFixed(2)} e estou com peso normal`)
        } else if (IMC > 25 && IMC < 30) {
            return (`Meu IMC é ${IMC.toFixed(2)} e estou com acima do peso`)
        } else if (IMC > 30 && IMC < 40) {
            return (`Meu IMC é ${IMC.toFixed(2)} e estou obeso`)
        } else {
            return (`Meu IMC é ${IMC.toFixed(2)} e estou com obesidade grave`)
        }

    }
}

const jose = new PessoasCadastradas('jose', 190, 1.70)
console.log(jose)

let IMCdoJose = jose.calcularIMC()
console.log(IMCdoJose)