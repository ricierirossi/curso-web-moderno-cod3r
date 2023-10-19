-- Todas as linhas de estados estarão relacionadas com todas as linhas de cidades. Não é interessante.
select * from estados e, cidades c 

-- Dessa forma busca apenas o que realmente está relacionado, igualando os ids
select * from estados e, cidades c 
where e.id = c.estado_id -- Critério de união

-- Para selecionar colunas que possuem o mesmo nome nas tabelas diferentes
-- Aqui no VSCode não gerou o resultado correto, provavelmente devido ao plugin. Mas no workbench funciona :D
select e.nome, c.nome, e.regiao from estados e, cidades c 
where e.id = c.estado_id

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c 
    on e.id = c.estado_id -- Critério de união

