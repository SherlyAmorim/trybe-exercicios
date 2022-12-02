const grossSalary = 5500.00;
let netSalary;

if (grossSalary <= 1556.94){
    baseSalary = (grossSalary - (grossSalary*0.08));
    netSalary = baseSalary
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92){
    baseSalary = (grossSalary - (grossSalary*0.09));
    
    if (baseSalary >= 1903.99 && baseSalary <= 2826.65){
        netSalary = (baseSalary - ((baseSalary*0.075)- 142.80));
    }
    else{
        netSalary = baseSalary;
    }
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82){
    baseSalary = (grossSalary - (grossSalary*0.11));
    
    if (baseSalary >= 1903.99 && baseSalary <= 2826.65){
        netSalary = (baseSalary - ((baseSalary*0.075)- 142.80));
    }
    else if (baseSalary >= 2826.66 && baseSalary <= 3751.05){
        netSalary = (baseSalary - ((baseSalary*0.15)- 354.80));
    }
    else {
        netSalary = (baseSalary - ((baseSalary*0.225)- 636.13));
    }
}
else{
    baseSalary = (grossSalary - 570.88);
    
    if (baseSalary >= 3751.06 && baseSalary <= 4664.68){
        netSalary = (baseSalary - ((baseSalary*0.225)- 636.13));
    }
    else {
        netSalary = (baseSalary - ((baseSalary*0.275)- 869.36));
    }
}
console.log('Salário Líquido = R$ ' + netSalary.toFixed(2));
