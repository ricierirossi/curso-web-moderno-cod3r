// Operador ... rest (juntar) / spread (separar)
// Usar rest com parâmetros de função

// Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} // Spread pega todos os atributos de funcionário e "espalha" dentro de clone
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)

