const fs = require('fs');

const json = fs.readFileSync('monitoramento.json');
const sensores = JSON.parse(json);

console.log ("=== SENSORES === ")

for (let s of sensores) {
    console.log(`Código: ${s.codigo} | Tipo: ${s.tipo} | Valor: ${s.valor} ${s.unidade} | Status: {s.status}`);
}
console.log("===== Sensores em situacao de Alerta  =====");
let totalAlerta = 0;

for(let s of sensores){
    if (s.status === 'ALERTA') {
        console.log(`Codigo: ${s.codigo} | Tipo: ${s.tipo} | Valor: ${s.valor}| Unidade: ${s.unidade}`);
        totalAlerta++;
    }
}
console.log('Total de Sensores em ALERTA: ${totalAlerta}');