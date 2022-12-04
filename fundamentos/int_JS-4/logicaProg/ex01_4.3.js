// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// 4! = 4 x 3 x 2 x 1 = 24
// O fatorial é representado pelo sinal !

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let number = 10;
let factorial = 0;

for (let index = 9; index > 0; index -= 1){
    factorial = number * index;
    number = factorial;
}
console.log('resultado: ' + factorial);
