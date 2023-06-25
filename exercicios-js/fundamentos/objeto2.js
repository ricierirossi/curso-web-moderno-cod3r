console.log(typeof Object) // Vai ser do tipo function
console.log(typeof new Object) // Pode-se criar um object através de uma function

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class produto {} // ES 2015 (ES6)
console.log(typeof produto)
console.log(typeof new produto)