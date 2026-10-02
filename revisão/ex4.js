const entrada = require('readline-sync');
const materiais = [];
for (let i = 1; i <= 4; i++) {
const material = {
nome: entrada.question(`Nome do ${i}o material: `),
quantidade: entrada.questionInt('Quantidade atual: '),
estoqueMinimo: entrada.questionInt('Estoque minimo: ')
};
materiais.push(material);
}
console.log('--- RELATORIO DE ESTOQUE ---');
for (let i = 0; i < materiais.length; i++) {
const material = materiais[i];
let situacao;
if (material.quantidade < material.estoqueMinimo) {
situacao = 'REPOR ESTOQUE';
} else {
situacao = 'ESTOQUE OK';
}
console.log(`Material: ${material.nome}`);
console.log(`Quantidade: ${material.quantidade}`);
console.log(`Estoque minimo: ${material.estoqueMinimo}`);
console.log(`Situacao: ${situacao}`);
console.log('-----------------------------');
}
