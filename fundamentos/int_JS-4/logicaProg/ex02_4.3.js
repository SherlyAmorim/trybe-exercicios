// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Tryber';
let newWord = '';


for(let index = word.length; index >= 0; index -= 1){
    newWord = word[index];
    console.log(newWord);
}
