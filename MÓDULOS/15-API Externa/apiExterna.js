//URL = 'https://sujeitoprogramador.com/rn-api/?api=posts'

let lista = document.querySelector("#lista")
let post = []

function nutriApp() {

    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((r) => r.json())
    .then((json) => {
        post = json
        
        post.map((elemento) => {

            let elementoLi = document.createElement('li')
            let elementoTitulo = document.createElement('h2')
            let elementoSubtitulo = document.createElement('a')
            let elementoImagem = document.createElement('img')

            let itemTitulo = document.createTextNode(elemento.titulo)
            elementoTitulo.appendChild(itemTitulo)
            elementoLi.appendChild(elementoTitulo)

            let itemSubtitulo = document.createTextNode(elemento.subtitulo)
            elementoSubtitulo.appendChild(itemSubtitulo)
            elementoLi.appendChild(elementoSubtitulo)

            elementoImagem.src = elemento.capa
            elementoLi.appendChild(elementoImagem)

            lista.appendChild(elementoLi)

        })

    })
    .catch(() => {
        console.log('Algo deu Errado')
    })

}

nutriApp()