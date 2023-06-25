// Curso Web Moderno - Exercícios JavaScript

/*  
    01. Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
*/

function calc(a, b) {
    console.log(`Soma: ${a + b}`)
    console.log(`Subtração: ${a - b}`)
    console.log(`Multiplicação: ${a * b}`)
    console.log(`Divisão: ${a / b}`)
}

calc(10, 2)

/*  
    02. Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
    triângulo).
*/

function triangulo(a, b, c) {
    if (a == b && b == c) {
        console.log('Triângulo Equilátero')
    } else if (a != b && a != c && b != c) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Triângulo Isósceles')
    }
}

triangulo(0, 0, 0)
triangulo(0, 0, 1)
triangulo(0, 1, 1)

/*  
    03. Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function exponenciar1(base, expoente) {
    return base ** expoente
}

function exponenciar2(base, expoente) {
    return Math.pow(base, expoente)
}

console.log(exponenciar1(3, 2))
console.log(exponenciar2(3, 2))

/*  
    04. Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
    e o resto da divisão destes dois valores.
*/

const divisao = function (dividendo, divisor) {
    console.log(`Resultado da divisão: ${dividendo / divisor}`)
    console.log(`Resto da divisão: ${dividendo % divisor}`)
}

divisao(3, 2)

/*  
    05. ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
    seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
    importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
    um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
    que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function dinheiro(a) {
    const b = a.toFixed(2)
    console.log(`R$ ${b.replace('.', ',')}`)
}

dinheiro(0.1 + 0.2)

/*  
    06. Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

let jurosSimples = (capIni, taxJur, temApl) => capIni * (1 + taxJur * temApl)

let jurosCompostos = (capIni, taxJur, temApl) => capIni * (1 + taxJur) ** temApl

console.log(jurosSimples(2000, 0.1, 3).toFixed(2))
console.log(jurosCompostos(2000, 0.1, 3).toFixed(2))

/*  
    07. Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
    elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
    parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
    -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
    que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
    “Delta é negativo”.
*/

function bhask(a, b, c) {
    let delta = (b ** 2) - 4 * a * c
    if (delta < 0) {
        console.log('Delta é negativo')
    } else {
        let x1 = (- b + Math.sqrt(delta)) / (2 * a)
        let x2 = (- b - Math.sqrt(delta)) / (2 * a)
        const vetor = [x1, x2]
        console.log(vetor)
    }
}

bhask(1, 3, 2)
bhask(3, 1, 2)

/*  
    08. ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
    registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
    mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
    pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
    vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
    jogo. (Número do pior jogo).
    Obs.: O primeiro jogo não conta como novo recorde do melhor.
    Exemplo:
    String: “10 20 20 8 25 3 0 30 1”
    Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
    aconteceu no sétimo jogo.)
*/

function pontuacao(pontos) {
    let recorde = pontos[0]
    let bateuRecorde = 0
    for(let i = 1; i < pontos.length; i++) { // ponto referencia
        for(let j = 0; j <= i; j++) { // ponto a ser comparado
            if(pontos[i] > pontos[j] && pontos[i] > recorde) {
                recorde = pontos[i]
                bateuRecorde++
            }
        }
    }
    let pior = pontos[0]
    let piorJogo = 0
    for(let a = 1; a < pontos.length; a++) { // ponto referencia
        for(let b = 0; b <= a; b++) { // ponto a ser comparado
            if(pontos[a] < pontos[b] && pontos[a] < pior) {
                pior = pontos[a]
                piorJogo = a + 1
            }
        }
    }
    let resultado = [bateuRecorde, piorJogo]
    console.log(resultado)
}

pontuacao([10, 20, 20, 8, 25, 3, 0, 30, 1])

/*  
    09. Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
    classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
    possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
    que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
    arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
    85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
    seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
    e o aluno será aprovado.
*/

function notas(nota) {
    if (nota >= 38) {
        let mult1 = nota + 1
        let mult2 = nota + 2
        if (mult1 % 5 == 0) {
            let notaFinal = mult1
            console.log(`Aprovado com nota arredondada: ${notaFinal}`)
        } else if (mult2 % 5 == 0) {
            let notaFinal = mult2
            console.log(`Aprovado com nota arredondada: ${notaFinal}`)
        } else {
            notaFinal = nota
            console.log(`Aprovado com nota: ${notaFinal}`)
        }
    } else if (nota < 38) {
        let notaFinal = nota
        console.log(`Reprovado com nota: ${notaFinal}`)
    } else {
        let notaFinal = nota
        console.log(`Aprovado com nota: ${notaFinal}`)
    }
}

notas(34)

/*  
    10. Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
    ou false.
*/

function div3(numero) {
    let divisivel = numero % 3
    return !!divisivel == 0
}

console.log(div3(3))

/*  
    11. ​As regras para o cálculo dos anos bissextos são as seguintes:
    De 4 em 4 anos é ano bissexto;
    De 100 em 100 anos não é ano bissexto;
    De 400 em 400 anos é ano bissexto;
    Prevalecem as últimas regras sobre as primeiras.
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
    mensagem e retornando true ou false.
*/

function bissexto(ano) {
    if (ano % 400 == 0) {
        console.log('Ano Bissexto')
    } else if (ano % 100 == 0) {
        console.log('Ano Não Bissexto')
    } else if (ano % 4 == 0) {
        console.log('Ano Bissexto')
    } else {
        console.log('Ano Não Bissexto')
    }
}

bissexto(400)
bissexto(500)
bissexto(1200)
bissexto(2300)

/*  
    12. Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(numero) {
    if (numero == 0) {
        console.log(`${numero}! = 1`)
    } else {
        let conta = 1
        for (i = 0; i < numero; i++) {
            numero - i
            conta *= (numero - i)
        }
        console.log(`${numero}! = ${conta}`)
    }
}

fatorial(1)

/*  
    13. Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
    dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function dia(d) {
    switch (d) {
        case 1:
            console.log('Fim de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil')
            break
        case 7:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia inválido')
    }
}

dia(0)
dia(1)
dia(2)
dia(3)
dia(4)
dia(5)
dia(6)
dia(7)
dia(8)

/*  
    14. Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
    casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
    escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
    também um default, que retornará uma mensagem de erro no console.
*/

function temFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Erro.')
    }
}

temFruta('maçã')
temFruta('kiwi')
temFruta('melancia')
temFruta('banana')

/*  
    15. Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
    possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
    comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
    que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
    “Não trabalhamos com este tipo de automóvel aqui”.
*/

function carro(modelo) {
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso.')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

carro('hatch')
carro('motocicleta')
carro('bicicleta')

/*  
    16. Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
    como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos 
    na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
    Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(a, operador, b) {
    switch (operador) {
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '*':
            console.log(a * b)
            break
        case '/':
            console.log(a / b)
            break
        default:
            console.log('Operação inválida')
    }
}

calculadora(5, '+', 2)
calculadora(5, '-', 2)
calculadora(5, '*', 2)
calculadora(5, '/', 2)
calculadora(5, '%', 2)

/*  
    17. Um funcionário irá receber um aumento de acordo com o seu plano de
    trabalho, de acordo com a tabela abaixo:

    Plano   Aumento
    A       10%
    B       15%
    C       20%

    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
    novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(salario * (1 + 0.1))
            break
        case 'B':
            console.log(salario * (1 + 0.2))
            break
        case 'C':
            console.log(salario * (1 + 0.15))
            break
        default:
            console.log('Plano inválido')

    }
}

aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('D', 1000)

/*  
    18. Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
    switch. Crie um case default que escreva 'Número fora do intervalo.'
*/

function extenso(numero) {
    switch(numero) {        
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo')
    }
}

extenso(0)
extenso(1)
extenso(2)
extenso(3)
extenso(4)
extenso(5)
extenso(6)
extenso(7)
extenso(8)
extenso(9)
extenso(10)
extenso(11)

/*  
    19. O cardápio de uma lanchonete é o seguinte:

    Código  Descrição do Produto    Preço
    100     Cachorro Quente         R$ 3,00
    200     Hambúrguer Simples      R$ 4,00
    300     Cheeseburguer           R$ 5,50
    400     Bauru                   R$ 7,50
    500     Refrigerante            R$ 3,50
    600     Suco                    R$ 2,80
    
    Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
    a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
    comando switch. Crie um caso default para produto não existente.
*/
function pedido(cod, qtd) {
    switch(cod) {
        case 100:
            console.log(3 * qtd)
            break
        case 200:
            console.log(4 * qtd)
            break
        case 300:
            console.log(5.5 * qtd)
            break
        case 400:
            console.log(7.5 * qtd)
            break
        case 500:
            console.log(3.5 * qtd)
            break
        case 600:
            console.log(2.8 * qtd)
            break
        default:
            console.log('Código inválido.')
    }
}

pedido(50, 2)

/*  
    20. Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
    para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
    Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
    informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
    nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function notas(valor) {
    qtd100 = Math.trunc(valor / 100)
    rest100 = valor % 100
    if(qtd100 != 0) {
        console.log(`${qtd100} nota(s) de R$ 100`)
    }
    qtd50 = Math.trunc(rest100 / 50)
    rest50 = rest100 % 50
    if(qtd50 != 0) {
        console.log(`${qtd50} nota(s) de R$ 50`)
    }
    qtd10 = Math.trunc(rest50 / 10)
    rest10 = rest50 % 10
    if(qtd10 != 0) {
        console.log(`${qtd10} nota(s) de R$ 10`)
    }
    qtd5 = Math.trunc(rest10 / 5)
    rest5 = rest10 % 5
    if(qtd5 != 0) {
        console.log(`${qtd5} nota(s) de R$ 5`)
    }
    qtd1 = Math.trunc(rest5 / 1)
    rest1 = rest5 % 1
    if(qtd1 != 0) {
        console.log(`${qtd1} nota(s) de R$ 1`)
    }    
}

notas(18)

/*  
    21. Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
    considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
    de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
    idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function valorPago(idade, convenio) {
    if(idade < 10) {
        console.log('R$ 100 + R$ 80')
    } else if(idade >= 10 && idade <= 30 && convenio == true) {
        console.log('R$ 100 + R$ 50')
    } else if(idade > 30 && idade <= 60 && convenio == true) {
        console.log('R$ 100 + R$ 95')
    } else if(idade < 60 && convenio == true) {
        console.log('R$ 100 + R$ 130')
    } else {
        console.log('Inválido')
    }
}

valorPago(3, false)
valorPago(3, true)
valorPago(20, false)
valorPago(20, true)

/*  
    22. Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
    parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
    anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
    compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

let anuidade = 100
const pagamento = (mes) => (anuidade * (1 + 0.05) ** (mes - 1)).toFixed(2)

console.log(pagamento(1))
console.log(pagamento(2))
console.log(pagamento(12))

/*  
    23. Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
    aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
    aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
    "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function resultado(cod, nota1, nota2, nota3) {

    let maiorNota = Math.max(nota1, nota2, nota3)
    let media = ((4 * maiorNota) + (3 * (nota1 + nota2 + nota3 - maiorNota))) / 10
    console.log(`Código ${cod}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Média: ${media}`)
    if(media >= 5) {
        console.log('Aprovado')
    } else {    
        console.log('Reprovado')
    }
}

resultado(1234, 8, 5, 3)

/*  
    24. Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/

let i = 0
function olaMundo() {
    while(i < 11 ) {
        i++
        console.log(`${i} Hello World!`)
    }
}

olaMundo()

/*  
    25. ​Escrever um programa para exibir os números de 1 até 50 na tela.
*/

let n = 0
function imprimir() {
    while(n < 50) {
        n++
        console.log(n)
    }
}

imprimir()

/*  
    26. Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

let p = 1
let pares = []
function par() {
    while(p <= 100) {
        resto = p % 2
        if(resto == 0) {
            pares.push(p)
        }
        p++
    }
    console.log(pares)
}

par()

/*  
    27. Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
    crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
    quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function criancas(h1, t1, h2, t2) {
    if((h1 > h2 && t1 < t2) || (h1 < h2 && t1 > t2)) {
        let maior = Math.max(h1, h2)
        let menor = Math.min(h1, h2)
        let anos
        for(anos = 1; menor < maior; anos++) {
            h1 = h1 + t1
            h2 = h2 + t2
            maior = Math.max(h1, h2)
            menor = Math.min(h1, h2)
        }
        console.log(`A criança menor ultrapassará a maior em ${anos} anos.`)
    } else {
        console.log('Crianças com mesma altura ou a menor nunca ultrapassará a maior')
    }
}

criancas(120, 2, 130, 1)

/*  
    28. Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/  

let vetor =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let par = 0
let impar = 0

function parImpar(v) {
    for(let i = 0; i < v.length; i++) {
        if(i % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`Par: ${par} --- Impar: ${impar}`)
}

parImpar(vetor)

/*  
    29. Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
    deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
    deles estão fora do intervalo, escrevendo estas informações.
*/  

function conta(intervalo) {
    let cont = 0
    for(let i = 0; i <= intervalo.length; i++) {
        if(intervalo[i] >= 10 && intervalo[i] <= 20) {
            cont++
            // console.log(cont)
        }
    }
    console.log(cont)
}

conta([9, 10, 11, 13, 16, 20, 22, 30])

/*  
    30. ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/  
   
   function maiorMenor(v) {
    let maior
    let menor
    for(let i = 0; i < v.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = v[i]
            menor = v[i]
        } else {
            if(v[i] > maior) {
                maior = v[i]
            }
            if(v[i] < menor) {
                menor = v[i]
            }
        }
    }
    console.log(menor, maior)
}

maiorMenor([10, -7, 1, 2, 3, 5, 4])

/*  
    31. ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
    e imprime a quantidade no console.
*/ 

function contaNegativo(vetor) {
    let cont = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            cont++
        }
    }
    console.log(cont)
}

contaNegativo([-5, -6, 8, -1, -1, 0])

/*  
    32. Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media(v) {
    let soma = 0
    let media
    for(let i = 0; i < v.length; i++) {
        soma += v[i]
        media = soma / (i + 1)
    }
    console.log(media)

}

media([1, 1, 1, 1])

/*  
    33. Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
    quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
    Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
    mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [0.1, 0.2, 0.3, 0.4]

const concatena1 = vetorInteiro.concat(vetorString).concat(vetorDouble)
const concatena2 = vetorInteiro.concat(vetorString, vetorDouble)

console.log(concatena1)
console.log(concatena2)

/*  
    34. Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
    todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function texto(string1, string2) {
    let texto1 = string1.toLowerCase().split("")
    let texto2 = string2.toLowerCase().split("")
    let igual = false
    for(let i = 0; i < texto1.length; i++) {
        for(let j = 0; j < texto2.length; j++) {
            
        }
    }
}

console.log(texto('zAbc', 'AAAab'))



/*  
    35. Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
    inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
    e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
    final das operações imprima os vetores no console.
*/

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adiciona(v1, v2) {
    for(let i = 0; i < v2.length; i++) {
        v1.push(v2[i])
    }
    console.log(v1)
}

adiciona(vetorPilha, vetorAdiciona)

/*  
    36. Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
    inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
    elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
    o valor do elemento for maior que 5.
*/

function multVetor(vetor, inteiro) {
    let resultado = []
    for(let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * inteiro)
    }
    console.log(resultado)
}

function multVetor5(vetor, inteiro) {
    let resultado = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] * inteiro > 5) {
            resultado.push(vetor[i] * inteiro)
        }
    }
    console.log(resultado)
}

multVetor([1, 2, 3, 4], 2)
multVetor5([1, 2, 3, 4], 2)

/*  
    37.  ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
    como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
    bem como a soma dos elementos.
*/

function pa(n, a1, r) {
    let termo = []
    for(let i = 1; i <= n; i++) {
        termo.push(a1 + (i - 1) * r) 
    }
    console.log(`Progressão Aritmética: ${termo}`)
    let soma = 0
    for(let i = 0; i < n; i++) {
        soma += termo[i]
    }
    console.log(`Soma: ${soma}`)
}

pa(5, 5, 2)

function pg(n, a1, r) {
    let termo = []
    for(let i = 1; i <= n; i++) {
        termo.push(a1 * (r ** (i - 1))) 
    }
    console.log(`Progressão Geométrica: ${termo}`)
    let soma = 0
    for(let i = 0; i < n; i++) {
        soma += termo[i]
    }
    console.log(`Soma: ${soma}`)
}

pg(10, 1, 2)

/*  
    38.  Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
    ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
    para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function imprimir(inicio = 0, fim = 100) {
    let troca
    if(inicio > fim) {
        troca = inicio
        inicio = fim
        fim = troca
    }
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    } 
}

imprimir(50, 39)

/*  
    39.  ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
    primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
    Faça a troca sem utilizar uma variável auxiliar.
*/

function trocaVetor(v1, v2) {
    if(v1.length != v2.length) {
        console.log('Vetores de tamanhos diferentes.')
    } else {
        for(let i = 0; i < v1.length; i++) {
            v2.push(v1[i])
            v1[i] = v2[i]
        }
        const x = v2.length
        for(let i = 0; i < x / 2; i++) {
            v2[i] = v2[(v1.length) + i] 
        }
        let j = (v2.length)
        for(let i = j; i > (j / 2); i--) {
            v2.pop()
        }
        console.log(v1)
        console.log(v2)
    }
}

trocaVetor([1, 2, 3], [4, 5, 6])

/*  
    40.  ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
    modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
    conceito B e de 9,0 a 10,0 o conceito A
*/

function notas(notas) {
    for(i = 0; i < notas.length; i++) {
        if(notas[i] >= 0 && notas[i] <= 4.9) {
            console.log(`Nota ${notas[i].toFixed(1)} - conceito D`)
        }
        if(notas[i] >= 5 && notas[i] <= 6.9) {
            console.log(`Nota ${notas[i].toFixed(1)} - conceito C`)
        }
        if(notas[i] >= 7 && notas[i] <= 8.9) {
            console.log(`Nota ${notas[i].toFixed(1)} - conceito B`)
        }
        if(notas[i] >= 9 && notas[i] <= 10) {
            console.log(`Nota ${notas[i].toFixed(1)} - conceito A`)
        }
    }
}

notas([3, 6, 8, 9.5])


