// Uma factory retorna uma nova instância (um novo objeto)

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        },
    };
};
