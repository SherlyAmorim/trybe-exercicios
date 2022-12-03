let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let values of numbers){
    sum += values;
}
let average = sum / numbers.length;
console.log('A média do Array é: ' + average);

if (average > 20){
    console.log('Valor maior que 20');
}
else{
    console.log('Valor menor ou igual a 20');
}