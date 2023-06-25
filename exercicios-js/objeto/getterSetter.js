const sequencia = {
    _valor: 1, // Conveção: está variável é pretendida ser acessada apenas internamente dentro deste objeto 
    get valor() {return this._valor++}, // Retorna o valor de _valor e acresta 1
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor) // Chama o Get
sequencia.valor = 1000 // Chama o Set. Se satisfeitas as condições, _valor passa a valer 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Chama o Set. Mas o valor de _valor não é alterado pois não satisfaz as condições
console.log(sequencia.valor, sequencia.valor)
