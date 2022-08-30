const entrada = [5.5];
let i = 0;

function getss() {
const valor = entrada[i];
i++;
return valor;

}

function prints(texto) {
console.log(texto);
}

module.exports = {getss, prints}