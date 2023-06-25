// Exemplo de callback par ser executado no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}