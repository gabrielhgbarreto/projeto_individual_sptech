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
versao int,
cor varchar(7),
ronco int,
	primary key (idMoto, fkUsuario)
);

create table avaliacao(
idAvaliacao int auto_increment,
fkUsuario int,
dtAvaliacao datetime default current_timestamp,
nota int,
mensagem varchar(150),
	primary key (idAvaliacao, fkUsuario)
);

 select * from moto;
 
 select * from usuario;

select * from avaliacao;
-- -------------------------------------------------SELECT's API
select versao, count(versao) from moto
	group by versao order by versao;
    
        
select null as ronco, avg(TIMESTAMPDIFF(YEAR, u.dtNasc, NOW())) contagem from usuario u
union
select ronco, count(*) contagem from moto
	group by ronco order by contagem desc;


select cor, count(*) from moto
	group by cor;
    

