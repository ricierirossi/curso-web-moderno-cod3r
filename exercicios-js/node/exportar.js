console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;

// this e exports são apenas duas referências para um mesmo objeto apontado pelo module.exports

console.log(module.exports);
