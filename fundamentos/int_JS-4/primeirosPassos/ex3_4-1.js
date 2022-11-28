// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const a = 8;
const b = 7;
const c = 4;

if(a > b && a > c){
    console.log(a + ' é maior nº entre ('+ a +', ' + b +' e '+ c+')');
}
else if (b > a && b > c){
    console.log(b + ' é maior nº entre ('+ a +', ' + b +' e '+ c+')');
}
else if (c > a && c > b){
    console.log(c + ' é maior nº entre ('+ a +', ' + b +' e '+ c+')');
}
else{
    console.log('existem nºs repetidos')
}
console.log('');

