const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 300
}

// __proto__ pode ser utilizado para verificar/acessa qual é o protótipo (pai) do objeto
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // prototype está presente apenas em funções
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function  meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
