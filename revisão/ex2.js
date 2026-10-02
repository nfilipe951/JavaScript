// EXERCÍCIO 02 - Média com laço e acumulador for, acumulador e média
// Uma linha de produção registrou a quantidade de peças com defeito em 6 inspeções. O programa deve ler
// os valores e calcular o total e a média.
// O programa deve:
// Criar um acumulador iniciado em zero.
// Usar um laço for para solicitar exatamente 6 valores.
// Somar cada valor ao acumulador.
// Ao final, calcular a média.
// Exibir total e média.
// Não repetir manualmente seis comandos de entrada.


const entrada = require('readline-sync');
let total = 0;
for (let i = 1; i <= 6; i++) {
const valor = entrada.questionInt(`Digite o valor da ${i}a inspecao: `);
total += valor;
}
const media = total / 6;
console.log(`Total de defeitos: ${total.toFixed(2)}`);  
console.log(`media de defeitos: ${media.toFixed(2)}`);  