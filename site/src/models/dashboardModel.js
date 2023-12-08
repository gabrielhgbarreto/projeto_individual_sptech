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

function idadeRonco() {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function idadeRonco()");

    var instrucao = `
        select null as ronco, avg(TIMESTAMPDIFF(YEAR, u.dtNasc, NOW())) contagem from usuario u
            union
        select ronco, count(*) contagem from moto
	        group by ronco order by contagem desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function versoes() {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function versoes()");

    var instrucao = `
        select versao, count(versao) contagem from moto
	        group by versao
                order by versao;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function feedback(id, avaliacao, descricao) {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function feedback():", id, avaliacao, descricao);
    
    var instrucao = `
        INSERT INTO avaliacao (fkUsuario, nota, mensagem) VALUES
            (${id}, ${avaliacao}, '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    enviar,
    cor,
    idadeRonco,
    versoes,
    feedback
};