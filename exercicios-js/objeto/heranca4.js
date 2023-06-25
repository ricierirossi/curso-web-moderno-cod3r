function meuObjeto() {}
console.log(meuObjeto.prototype )

const obj1 = new meuObjeto
const obj2 = new meuObjeto
// Todos objetos criados a partir de uma mesma função construtora apontam para um mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__) 
// Um objeto criado a partir de uma função construtora utilizando new, o protótipo deste objeto automaticamente aponta para
// função.prototype e não para Object.prototype que é quando se cria um objeto a partir do new Object ou de forma literal
// (nestes casos, por padrão, o protótipo dele é o object.prototype)
console.log(meuObjeto.prototype === obj1.__proto__) 


// Qualquer objeto criado a partir desta função terá o atributo nome com o valor Anônimo
meuObjeto.prototype.nome =  'Anônimo'
meuObjeto.prototype.falar = function () {
    console.log(`Bom dia. Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
// Mudando a referência do protótipo do obj3 para sair de Object.prototype para meuObjeto.prototype
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// Resumindo
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)