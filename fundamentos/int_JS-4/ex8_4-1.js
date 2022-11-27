// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const number1 = 8;
const number2 = 15;
const number3 = 33;

let resultado = false;

if ((number1 % 2 === 0) || (number2 % 2 === 0) || (number3 % 2 === 0)){
    resultado = true;
}
console.log(resultado);
