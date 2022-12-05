/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.*/

// let cousin = [];
let dividend = [];
let divider = [];
let largerCousin = 0;

for (let index = 2; index <= 10; index +=1){
    dividend.push(index);
    divider.push(index);
    // console.log("dividend: " + dividend[index-2]);
    for (let index2 = 0; divider[index2] < dividend[index-2]; index2 +=1){
       
        if (dividend [index-2] % divider[index2] !== 0){
            // largerCousin < dividend[index];
            largerCousin = dividend[index-2];
            // console.log(largerCousin);
        }
           
    }
}
console.log(largerCousin);


// let maiorNumPrimo = 0;

// for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
// //   let ePrimo = true;
//   for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
//     if (numeroAtual % divisorAtual !== 0) {
// //       ePrimo = false;
// //     }
// //   }
// //   if (ePrimo) {
//     maiorNumPrimo = numeroAtual;
//   }
// }
// }
// console.log(maiorNumPrimo);

