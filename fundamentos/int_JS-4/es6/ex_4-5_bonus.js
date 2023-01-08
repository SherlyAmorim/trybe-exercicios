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
// console.log(substituaX('Maria'));

// Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

const minhasSkills = (remake) => {
    const skills = ['JS', 'HTML', 'CSS'];
    let result = `
    ${remake} 
    Minhas três principais habilidades são:`;
    for (let skill of skills){
        result = `${result}
        * ${skill}`;
    }    
    return result;
}
console.log(minhasSkills(substituaX('Maria')));
