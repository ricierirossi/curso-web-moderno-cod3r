-- Criando as tabelas
create table carrinho.clientes (
id int unsigned not null auto_increment,
nome varchar(255) not null,
cpf varchar(255) not null,
endereco varchar(255) not null,
primary key (id),
unique key (cpf)
);

create table carrinho.carrinhos(
id int unsigned not null auto_increment,
id_cliente int unsigned not null,
primary key (id),
foreign key (id_cliente) references carrinho.clientes (id)
);

create table carrinho.itens_carrinho(
id_carrinho int unsigned not null,
id_produto int unsigned not null,
qtd int unsigned not null,
valor_unit decimal (6,1),
valor_total decimal(6,2),
foreign key (id_carrinho) references carrinho.carrinhos (id),
foreign key (id_produto) references carrinho.produtos (id)
);

create table carrinho.produtos(
id int unsigned not null auto_increment,
nome varchar(255) not null,
valor_unit decimal (6,1),
qtd int unsigned not null,
primary key (id)
);

-- Populando
INSERT INTO carrinho.clientes (nome, cpf, endereco) VALUES ('João da Silva', '123.456.789-00', 'Rua A, 123');
INSERT INTO carrinho.clientes (nome, cpf, endereco) VALUES ('Maria Souza', '987.654.321-00', 'Avenida B, 456');
INSERT INTO carrinho.clientes (nome, cpf, endereco) VALUES ('Carlos Pereira', '111.222.333-44', 'Rua C, 789');
INSERT INTO carrinho.clientes (nome, cpf, endereco) VALUES ('Ana Oliveira', '555.666.777-88', 'Rua D, 321');
INSERT INTO carrinho.clientes (nome, cpf, endereco) VALUES ('Ricardo Santos', '999.888.777-66', 'Avenida E, 987');

INSERT INTO carrinho.carrinhos (id_cliente) VALUES (4);
INSERT INTO carrinho.carrinhos (id_cliente) VALUES (3);
INSERT INTO carrinho.carrinhos (id_cliente) VALUES (5);
INSERT INTO carrinho.carrinhos (id_cliente) VALUES (2);
INSERT INTO carrinho.carrinhos (id_cliente) VALUES (1);

INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 1', 10.0, 100);
INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 2', 15.0, 50);
INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 3', 8.0, 75);
INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 4', 12.0, 63);
INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 5', 4.0, 2);
INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 6', 135.0, 96);
INSERT INTO carrinho.produtos (nome, valor_unit, qtd) VALUES ('Produto 7', 587.0, 13);

INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (1, 1, 3, 10.0, 30.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (1, 3, 1, 15.0, 15.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (1, 4, 1, 11.0, 11.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (2, 7, 3, 20.5, 61.5);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (2, 1, 5, 10.0, 50.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (3, 2, 2, 100.0, 200.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (3, 6, 1, 3.0, 3.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (3, 5, 1, 5.0, 5.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (4, 1, 2, 10.0, 20.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (4, 4, 1, 10.0, 30.0);
INSERT INTO carrinho.itens_carrinho (id_carrinho, id_produto, qtd, valor_unit, valor_total) VALUES (5, 1, 3, 10.0, 30.0);

--
select * from carrinho.clientes;
select * from carrinho.carrinhos;
select * from carrinho.itens_carrinho;
select * from carrinho.produtos;