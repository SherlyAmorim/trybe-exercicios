// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


let grossSalary = 8000.00;
let inssAliquotN1 = (8/100);
let inssAliquotN2 = (9/100);
let inssAliquotN3 = (11/100);
let inssAliquotN4 = 570.88;
let irAliquotN1 = (7.5/100);
let irAliquotN2 = (15/100);
let irAliquotN3 = (22.5/100);
let irAliquotN4 = (27.5/100);
let deductIrN1 = 142.80;
let deductIrN2 = 354.80;
let deductIrN3 = 636.13;
let deductIrN4 = 869.36;
let baseSalary;
let deductSalaryIr;
let netSalary;

if (grossSalary <= 1556.94){
    
    baseSalary = (grossSalary - (grossSalary * inssAliquotN1));
    
    netSalary = baseSalary;
    console.log(netSalary);
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92){
    
    baseSalary = (grossSalary - (grossSalary * inssAliquotN2));
                
    if (baseSalary >= 1903.99 && baseSalary <= 2826.65){
        
        deductSalaryIr = ((baseSalary*irAliquotN1) - deductIrN1);
        
        netSalary = (baseSalary - deductSalaryIr);
        console.log(netSalary);
    }
    else{
        netSalary = baseSalary;
        console.log(netSalary);
    }   
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82){
    
    baseSalary = (grossSalary - (grossSalary * inssAliquotN3));
    console.log(baseSalary);

    if (baseSalary >= 1903.99 && baseSalary <= 2826.65){
        
        deductSalaryIr = ((baseSalary*irAliquotN1) - deductIrN1);
        
        netSalary = (baseSalary - deductSalaryIr);
        console.log(netSalary);
    }
    else if (baseSalary >= 2826.66 && baseSalary <= 3751.05){        
        deductSalaryIr = ((baseSalary*irAliquotN2) - deductIrN2);
        
        netSalary = (baseSalary - deductSalaryIr);
        console.log(netSalary);
    }
    else if (baseSalary >= 3751.06 && baseSalary <= 4664.68){        
        deductSalaryIr = ((baseSalary*irAliquotN3) - deductIrN3);
        
        netSalary = (baseSalary - deductSalaryIr);
        console.log(netSalary);
    }
}
else if (grossSalary > 5189.82){
    
    baseSalary = (grossSalary - inssAliquotN4);
    // console.log(baseSalary);

    if (baseSalary >= 3751.06 && baseSalary <= 4664.68){        
        deductSalaryIr = ((baseSalary*irAliquotN3) - deductIrN3);
        
        netSalary = (baseSalary - deductSalaryIr);
        console.log(netSalary);
    }
    else if (baseSalary > 4664.68){        
        deductSalaryIr = ((baseSalary*irAliquotN4) - deductIrN4);
        netSalary = (baseSalary - deductSalaryIr);
        console.log(netSalary);
    }
}