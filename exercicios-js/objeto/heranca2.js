// Cadeia de protótipos (Prototype Chain)

Object.prototype.atr0 = 0 // Não fazer isso :D

const avo = {atr1: 'A'}
const pai = {__proto__: avo, atr2: 'B', atrSombreamento: 'Sombreado'} // Referenciando que o pai tem como protótipo o avo
const filho = {__proto__: pai, atr3: 'C', atrSombreamento: 'Sombra'}

console.log(filho.atr0)
console.log(filho.atr1)
console.log(filho.atr2)
console.log(filho.atr3)
console.log(filho.atrSombreamento) // Quando o filho tem o mesmo atributo que seu protótipo mas com outro valor, ele vai retornar o primeiro encontrado

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) { // this referencia o objeto atual
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing (este atributo vai sombrear o atributo de carro)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // this referencia o objeto atual; super referencia o protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) // Estabelece relação de protótipo entre ferrari (filho) e carro (pai)
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())