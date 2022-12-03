let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;


for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}

let media = soma / numbers.length

console.log('Média do Array é: ' + media);


console.log('-------------------------');
console.log('----- Usando For/Of -----');
console.log('-------------------------');

let sum = 0;

for (let valores of numbers){
    sum += valores;
}
let average = sum / numbers.length

console.log('Média do Array é: ' + average);
