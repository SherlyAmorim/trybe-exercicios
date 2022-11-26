// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

x = 90;
y = 60;
z = 30;

if (x+y+z === 180){
    console.log('true');
}
else if (x+y+z !== 180 && x > 0 && y > 0 && z > 0){
    console.log('false');
}
else if (x < 0 || y < 0 || z < 0){
    if (x < 0 && y > 0 && z > 0){
        console.log(x + ' é um ângulo inválido');
    }
    else if(y < 0 && x > 0 && z > 0){
        console.log(y + ' é um ângulo inválido');
    }
    else if(z < 0 && x > 0 && y > 0){
        console.log(z + ' é um ângulo inválido');
    }
    else{
        console.log('Existe mais de 1 ângulo inválido');
    }
}
else{
    console.log('Não é um triângulo.');
}
