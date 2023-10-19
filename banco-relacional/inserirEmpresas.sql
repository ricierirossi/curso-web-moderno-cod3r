alter table empresas modify cnpj varchar(14);


insert into empresas (nome, cnpj)
values 
    ('Bradeco', 77215671000102),
    ('Vale', 51353512000172),
    ('Cielo', 01789033000125);

desc empresas
desc prefeitos

select * from empresas;
select * from cidades

insert into empresas_unidades (empresa_id, cidade_id, sede)
values (1, 1, 1), (1, 3, 0), (2, 1, 0), (2, 3, 1)

select * from empresas_unidades