// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('1. Percorra o array imprimindo todos os valores nele contidos com a função console.log();');
console.log('');

for (number of numbers){
    console.log(number);
}


console.log('');
console.log('2. Some todos os valores contidos no array e imprima o resultado;');

let result = 0;

for (number of numbers){
    result += number;
}
console.log('');
console.log('A soma dos valores do Array é: ' + result);


console.log('');
console.log('3. Calcule e imprima a média aritmética dos valores contidos no array (A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos).');
console.log('');

let soma = 0;

for (number of numbers){
    soma += number;    
}
let media = (soma / numbers.length);
console.log('A média dos valores é: ' + media);


console.log('');
console.log('4. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;');
console.log('');

if (media > 20) {
    console.log('Valor maior que 20');
}else {
    console.log('Valor menor ou igual a 20');
}


console.log('');
console.log('5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;');
console.log('');

let maior = 0;
for (number of numbers){
    if (maior < number){
        maior = number;
    }
}
console.log('O maior valor do array é: ' + maior);


console.log('');
console.log('6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”');
console.log('');

let impar = 0;
for (number of numbers){
    if (number % 2 !== 0){
        impar += 1;
    }
}
if (impar > 0) {
    console.log('Existem: ' + impar + ' valores impares no array.');
} else {
    console.log('Nenhum valor impar encontrado.');    
}


console.log('');
console.log('7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;');
console.log('');

let menor = numbers[0];
for (let index = 0; index < numbers.length; index += 1){
    if (menor > numbers[index]){
        menor = numbers[index];
    }
}
console.log('O menor valor do array é: ' + menor);


console.log('');
console.log('8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;');
console.log('');

let array = [];
for(index = 1; index <= 25; index += 1){
    array.push(index);
}
console.log(array);


console.log('');
console.log('9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.');
console.log('');


for(index of array){
    let divid = (index / 2);
    console.log(divid);
}


console.log('');
console.log('Ordene o array numbers em ordem crescente e imprima seus valores;');
console.log('');

let cresc;
for (let index = 1; index < numbers.length; index+= 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index2] > numbers[index]) {
            cresc = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = cresc;
            
        }
    }    
}
console.log(numbers);


console.log('');
console.log('Ordene o array numbers em ordem decrescente e imprima seus valores;');
console.log('');

let decres;
for (let index = 1; index < numbers.length; index+= 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index2] < numbers[index]) {
            cresc = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = cresc;
            
        }
    }    
}
console.log(numbers);


console.log('');
console.log('Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:');
console.log('');

let values = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiply = [];

for (let index = 0; index < values.length; index += 1){
    if(index + 1 < values.length){        
        multiply.push(values[index] * values[index + 1]);        
    }
    else {        
        multiply.push(values[index] * 2);        
    }
}
console.log(multiply);