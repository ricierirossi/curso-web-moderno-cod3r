async function soltaOsCachorros () {
    let response = await fetch('https://dog.ceo/api/breeds/image/random/5');
    let doguinhoData = await response.json();
    console.log(typeof response)
}



soltaOsCachorros()

async function cachorrao () {
    let response =  fetch('https://dog.ceo/api/breeds/image/random/5');
    response.then(data => {
        return data.json()
    })
    .then(console.log)
}

cachorrao()