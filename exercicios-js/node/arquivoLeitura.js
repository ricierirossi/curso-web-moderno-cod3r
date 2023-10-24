const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// de forma síncrona...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// de forma assíncrona...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

// ou...
const config = require("./arquivo.json");
console.log(config.db);

// lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta ----------");
    console.log(arquivos);
});
