// function declaration --> vantagem: pode ser chamada antes mesmo de sua declaração.
function soma(x, y) {
    return x + y
}

// function expression --> não pode ser chamada antes de ser declarada.
const sub = function (x, y) {
    return x - y
}

// named function expression --> não pode ser chamada antes de ser declarada.
const mult = function mult (x, y) {
    return x * y
}

