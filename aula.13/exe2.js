const fs = require ('fs');

const json = fs.readFileSync ('equipamento.json');
const objetJson = JSON.parse(json);

function verificarArquivoJson(json) {
    if (json) {
        for (let i of json) {
            console.log (`Codigo: ${i.codigo}`)
            console.log (`Nome: ${i.nome}`)
            console.log (`Setor: ${i.setor}`)

            if (i.operacional === true){
                console.log(`operacional: OPERACIONAL`);
                
            } else {
                console.log (`operacional: PARADA`)
            }
        }
            
    } else {
        console.log(`Arquivo nao encontrado`);
    }
};

verificarArquivoJson(objetJson);

