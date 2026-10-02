const fs = require('fs');

const json = fs.readFileSync ('equipamento.json');
const objetJson = JSON.parse(json);

console.log (`----- Equipamentos Parados -----`)

function eqpfalso (json) {
    if(json){
       for (let i of json ){
            let contagem = 0
                        if (i.operacional === false) {
                            console.log (`Codigo: ${i.codigo}`)
                            console.log (`nome: ${i.nome}`)
                            console.log (`setor: ${i.setor}`)
                            console.log (`Operacional: PARADA\N`)
                            contagem =+ 1

                        } else {
                            continue
                        } 
                    if (contagem > 0){
                        console.log(`Equipamentos parados ${contagem}`);
                    } else{
                         console.log(`Nenhum equipamento parado`)
                    }

        } 
        } else {
             console.log(`Arquivo nao encontrado`)
    }
       
}






