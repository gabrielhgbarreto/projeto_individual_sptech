var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, dtNasc, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, dtNasc, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoInsertUsuario = `
        INSERT INTO usuario (nome, dtNasc, email, senha) VALUES ('${nome}', '${dtNasc}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoInsertUsuario);

    return database.executar(instrucaoInsertUsuario)
        .then (function (resultadoCadastro){
            var idUsuario = resultadoCadastro.insertId;
            console.log(idUsuario);
            cadastrarMoto(idUsuario);
        });
}

function cadastrarMoto(idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarMoto():", idUsuario);

    var instrucaoInsertMoto = `
        INSERT INTO moto (idMoto, fkUsuario) VALUES (1, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoInsertMoto);

    return database.executar(instrucaoInsertMoto)
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarMoto
};