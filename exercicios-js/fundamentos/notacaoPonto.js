console.log(Math.ceil(6.1)) 
console.log(Math.floor(6.1)) 

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome /* this.nome significa o nome associado ao objeto que for criado a partir desta função. 
    Isto é, nome fica visível fora do escopo da função */
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)


