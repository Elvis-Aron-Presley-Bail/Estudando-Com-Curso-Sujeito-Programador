let texto = document.querySelector("#texto")
let listaUl = document.querySelector("#listaUl")

let lista = JSON.parse(localStorage.getItem("@ChaveDeAcesso")) || []

function botao() {
    lista.push(texto.value)
    console.log(lista)

    listar()
    salvarItem()

    texto.value = ''
}

function listar() {
    listaUl.textContent = ''
    lista.map((elemento) => {
        let novoElemento = document.createElement("li")
        novoElemento.textContent = elemento
        listaUl.appendChild(novoElemento)
    })

}

listar()

function salvarItem() {
    localStorage.setItem('@ChaveDeAcesso', JSON.stringify(lista))
}