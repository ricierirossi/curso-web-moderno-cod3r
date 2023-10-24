let a = 2; // Visível apenas dentro do modulo

// Visivel fora do modulo por ter sido exportado
// Forma clássica de exportação

module.exports = {
    bomDia: "bom dia",
    boaNoite() {
        return "Boa noite";
    },
};
