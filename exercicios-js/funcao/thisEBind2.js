// Pode-se bindar o this de duas formas:

// Forma 1
/*

function pessoa() {
    this.idade = 0

    setInterval(function() { 
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa

*/

// Forma 2

function pessoa() {
    this.idade = 0

    const self = this // self sempre vai valer este this relacionado a pessoa pois é uma constante e não muda
    setInterval(function() { 
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new pessoa
