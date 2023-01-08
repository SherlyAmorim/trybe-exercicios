// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

let statusMotor = 'desligado';

// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

const ligarDesligar = () => (
    statusMotor = statusMotor === 'desligado' ? 'ligado' : 'desligado'
    );

// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).

console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);


// 🚀 Crie uma função que calcule a área de um círculo. (Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado. Com base nessa informação):

// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
const PI = 3.14;

// Crie a lógica para retornar a área do círculo;
const circleArea = raio => PI * raio ** 2;

// Imprima no terminal “Essa é a área do círculo: resultado da função“ 
console.log(`Essa é a área do círculo: ${circleArea(5)}`);


// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = phrase => {
    
    const wordArray = phrase.split(' ');
    let longest = 0;
    let result = ' ';

    for (const word of wordArray) {
        if (word.length > longest) {
            longest = word.length;
            result = word;
        }   
    }
    return result;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));