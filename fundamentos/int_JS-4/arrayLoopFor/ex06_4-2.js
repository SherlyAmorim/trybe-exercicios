// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let values of numbers){
    if (values % 2 !== 0){
        odd += 1;
    }
}   

if (odd === 0){
    console.log('Nenhum valor ímpar encontrado!');
} else{
    console.log(odd);
}

