-- Criando a tabela Estados
create table estados (
    id INT  UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-oeste', 'Sudeste', 'Sul') NOT NULL, -- Aceita apenas os valores dentro de ENUM()
    populacao DECIMAL(5,2) NOT NULL, -- Formato: 12345,67
    PRIMARY KEY (id),
    UNIQUE KEY  (nome),  
    UNIQUE KEY  (sigla)
);