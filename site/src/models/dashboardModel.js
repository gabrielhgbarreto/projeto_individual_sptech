var database = require("../database/config")

function enviar(id, versao, cor, ronco) {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", versao, cor, ronco);
    
    var instrucao = `
        UPDATE moto SET versao = ${versao}, cor = '${cor}', ronco = ${ronco} WHERE idMoto = 1 AND fkUsuario = ${id}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cor() {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cor()");

    var instrucao = `SELECT cor, count(*) contagem FROM moto GROUP BY cor;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    enviar,
    cor
};