console.log(this === global); // false
console.log(this === module); // false

console.log(this === exports); // true
console.log(this === module.exports); // true

function logThis() {
    console.log(this === exports); // false
    console.log(this === module.exports); // false
    console.log(this === global); // true
}

logThis();

// Ou seja, fora de uma função, this aponta para um módulo do node. Dentro de uma função, this aponta para o escopo global do node.
// Exceto com Arrow Functions, onde o this aponta para o module.exports

const arrowThis = () => {
    console.log(this === exports); // true
    console.log(this === module.exports); // true
    console.log(this === global); // false
};
arrowThis();
