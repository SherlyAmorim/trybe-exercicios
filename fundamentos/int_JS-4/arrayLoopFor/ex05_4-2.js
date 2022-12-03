let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let larger = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(larger < numbers[index]){
    larger = numbers[index];
    }
}
console.log(larger);


console.log('');
console.log('----- Usando For/Of -----');
console.log('');

for (let values of numbers){
    if (larger < values){
        larger = values;
    }
}
console.log(larger);