// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}
console.log(numbers);

for (let index = 0; index < numbers.length; index += 1){
        console.log(numbers[index]/2);
}

console.log('');
console.log('----- Usando For/Of -----');
console.log('');

for (let values of numbers){
    let result = values / 2;
    console.log(result);
}
