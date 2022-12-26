// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n:

let n = 5;
let simbolo = '*';
let repeat = '';

for (let index = 0; index < n; index += 1){
    repeat = repeat + simbolo;
}
for (let index2 = 0; index2 < n; index2 += 1){ 
    console.log(repeat);
}
console.log('');
console.log('');

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n1 = 5;
let repeat1 = [];

for (let index = 0; index < n1; index += 1){
    console.log(repeat1 += ['*']);
}

console.log('');
console.log('');

// Agora inverta o lado do triângulo. Por exemplo:

// let n2 = 5;
// let repeat2 = [];

// for (let index = 0; index < n2; index += 1){
//     console.log(repeat2 += ['*']);
// }