const entrada = require('readline-sync');

const pecaPorCiclo = entrada.questionInt("Quantas pecas sao produzidas por ciclo; \n");

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const acumulado = ciclo * pecaPorCiclo;
    console.log(`Ciclo ${ciclo}: ${acumulado} pecas acumuladas`)
}
