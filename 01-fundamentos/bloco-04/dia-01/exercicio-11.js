/* 

  Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de
  seu salário bruto o INSS e o IR. Faça um programa que, dado um salário
  bruto, calcule o líquido a ser recebido.

  A notação para um salário de R$ 1500,10, por exemplo, deve ser 1500.10. Para as faixas
  de impostos, use as seguintes referências:

  - INSS (Instituto Nacional do Seguro Social)
    - Salário bruto até R$ 1.556,94: alíquota de 8%
    - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

  - IR (Imposto de Renda)
    - Até R$ 1.903,98: isento de imposto de renda
    - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

*/

const salarioBruto = 3000.00;
let aliquotaINSS;
let aliquotaIR;

// INSS
if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}
const salarioBase = salarioBruto - aliquotaINSS;

// IR
if (salarioBase <= 1903.99) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}
const salarioLiquido = salarioBase - aliquotaIR;

console.log(`Salário Líquido: R$ ${salarioLiquido}`);
