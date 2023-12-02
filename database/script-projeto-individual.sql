create database projetoIndividual;
use projetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
dtNasc date,
email varchar(45),
senha varchar(20)
);

create table moto(
idMoto int,
fkUsuario int,
versao char(1),
cor char(3),
ronco char(1)
);


select*from usuario;