var dashboardModel = require("../models/dashboardModel");

function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idSever;
    var versao = req.body.versaoServer;
    var cor = req.body.corServer;
    var ronco = req.body.roncoServer;

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("O ID está undefined!");
    } else if (versao == undefined) {
        res.status(400).send("A versão está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("A cor está undefined!");
    } else if (ronco == undefined) {
        res.status(400).send("O ronco está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo dashModel.js
        dashboardModel.enviar(id, versao, cor, ronco)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cor(req, res) {
    console.log(`Buscando as cores no banco`);

    dashboardModel.cor().then(function (resultado) {
        if (resultado.length > 0) {
            console.log("Resultado do banco")
            console.log(resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    enviar,
    cor
}