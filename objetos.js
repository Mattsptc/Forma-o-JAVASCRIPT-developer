/* const pessoa = {
    nome: 'vitor',
    idade: 18,
    cidade: 'uberlandia',
    // funcao dentro de objeto e chamado metodo
    descrever: function () { console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)}};
 */
/* console.log(pessoa.cidade);

pessoa.altura = 1.70;

console.log(pessoa);

delete pessoa.cidade;

console.log(pessoa);


pessoa.nome = 'Renan';
pessoa.idade = 23;
pessoa.descrever();
 */
 // classes
class People {
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

const joao = new People('jose', 17);


const renan = new People('renan', 12);


console.log(joao)