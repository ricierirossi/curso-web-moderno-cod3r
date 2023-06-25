const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => { //Este método está recebendo body ---- Pode-se trocar post por get aqui
    //Vantagem do GET: se tem uma URL que pode ser replicada novamente (copiar e colar e chegar no mesmo lugar)
    //Desvantagem do GET: toda informação inserida fica exposta da url, como senhas por exemplo.
    console.log(req.body) // caso se utilize get, deve-se trocar body por query
    resp.send('<h1>Parabéns. Usuário incluido.</h1>')
})

app.post('/usuarios/:id', (req, resp) => { //Este método está recebendo id e body
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado.</h1>')
})

app.listen(3003)    