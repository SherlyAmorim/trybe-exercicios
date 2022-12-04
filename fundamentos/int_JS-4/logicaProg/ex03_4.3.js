// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let larger = array [0];

for(let index = 0; index < array.length; index += 1){
    if (larger.length < array[index].length){
        larger = array[index];
    }    
}
let smaller = larger;

for(let index = 0; index < array.length; index += 1){
    if (smaller.length > array[index].length){
        smaller = array[index];
    }    
}
console.log('MAIOR palavra do Array é: ' + larger + ', e MENOR palavra do Array é: ' + smaller + '!');