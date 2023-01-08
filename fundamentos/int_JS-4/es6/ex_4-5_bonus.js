/*Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;

A função deverá receber um nome por parâmetro;

Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.*/

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const newFrase = frase.split(' ');

        for(const word in newFrase){
            if (newFrase[word] === 'x'){
                newFrase[word] = nome;
            }
        }
    return newFrase.join(' '); // .join transforma array em string.
}
console.log(substituaX('Maria'));