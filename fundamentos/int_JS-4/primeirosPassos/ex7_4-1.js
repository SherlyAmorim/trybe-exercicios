// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let gradePercent = '';


if(gradePercent < 0 || gradePercent > 100){
    console.log('Erro, nota inexistênte');
}
else if (gradePercent >= 90){
    console.log('Nota A.');
}
else if(gradePercent >= 80){
    console.log('Nota B.');
}
else if(gradePercent >= 70){
    console.log('Nota C.');
}
else if(gradePercent >= 60){
    console.log('Nota D.');
}
else if(gradePercent >= 50){
    console.log('Nota E.');
}
else{
    console.log('Nota F.')
}