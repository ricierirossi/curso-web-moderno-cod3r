// Implementando Reduce (com valor inicial sendo o primeiro elemento do array)
Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma2 = (total, valor) => total + valor
const nums2 = [1, 2, 3, 4, 5, 6]
console.log(nums2.reduce2(soma2))

// Implementando Reduce (com valor inicial sendo passado)
Array.prototype.reduce3 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma3 = (total, valor) => total + valor
const nums3 = [1, 2, 3, 4, 5, 6]
console.log(nums3.reduce3(soma3, 21))

