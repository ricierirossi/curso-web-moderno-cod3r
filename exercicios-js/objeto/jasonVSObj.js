// JSON não pode ter funções
// Transformando objeto em json
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

// Transformando json em objeto
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) está incorreto
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) está incorreto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // está correto
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))