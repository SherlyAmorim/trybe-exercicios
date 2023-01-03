// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(word) {
    for(index in word) {
        if (word[index] != word[(word.length-1)-index]){
            return false;
        }
    }
    return true;
}
// console.log(verificaPalindrome('arara'));

/* UTILIZANDO split(), reverse() e join();
Tentei utilizar o toLowerCase(), mas não funcionou.
*/


function verificaPalindrome(string) {
   let reverse = string.toLowerCase().split('').reverse().join('');    
    if (reverse === string) {
        return true;
    } else {
        return false
    }   
}
console.log(verificaPalindrome('arara'));



// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function largerValue(numbers) {
    let index2 = 0;
    for(let index in numbers){
        if (numbers[index] > numbers[index2]) {
            index2 = index;
        }
    }
    return index2;
}
console.log(largerValue([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallerValue(values) {
    let index2 = 0;
    for(let index in values){
        if (values[index] < values[index2]) {
            index2 = index;
        }
    }
    return index2;
}
console.log(smallerValue([2, 4, 6, 7, 10, 0, -3]));


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largerName(names) {
    let larger = names[0];
    for (let index in names){
        if (larger.length < names[index].length){
            larger = names[index];
        }
    }
    return larger;
}
console.log(largerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function moreRepeat(numbers) {
    let contRepeat = 0;
    let contNumber = 0;
    let indexMore = 0;

    for (let index in numbers) {
        let loopPosition = numbers[index];
        
        for (let index2 in numbers){                       
            if (loopPosition === numbers[index2]) {
                contNumber += 1;
            }
        }
        if(contNumber > contRepeat){
        contRepeat = contNumber;
        indexMore = index;        
        }
        contNumber = 0;
    }
    
    return numbers[indexMore];
}
console.log(moreRepeat([2, 3, 2, 5, 8, 2, 3]));


// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function naturalNumber(natural) {
    let sumNatural = 0;
    for (let index = 1; index <= natural; index += 1)
        sumNatural = sumNatural + index;
    
    return sumNatural;
}
console.log(naturalNumber(5));


// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function string(word, ending) {
    word = word.split('');
    ending = ending.split('');
    let control = true;

    for(let index = 0; index < ending.length; index += 1){
        if (word[word.length - ending.length + index] != ending[index]) {
            control = false;
        }
    }
    return control;
}
console.log(string('joaofernando', 'fernan'));



  