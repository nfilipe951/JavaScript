const fs = require('fs');

const equipamentos = [
    {codigo: 1, nome: "torno CNC", setor:"usinagem", operacional: true},
    {codigo: 2, nome: "prensa hidraulica", setor:"operacoes", operacional: true},
    {codigo: 3, nome: "betoneira", setor:"producoes", operacional: true},
  
];

const textoEquipamentos = JSON.stringify(equipamentos, null, 2);

fs.writeFileSync('equipamento.json',textoEquipamentos);

console.log('Fiqueiro equipamentos.json quardado com sucesso!');