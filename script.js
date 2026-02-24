var texto = document.querySelector("#texto")

function botao() {

    var nome = prompt("DIgite seu nome: ")

    if(nome === '' || nome === null) {
        alert("Algo deu errado")
        texto.innerHTML = 'Clique no botão para acessar...'
    } else {
        texto.innerHTML = 'Bem vindo ' + nome + ' '

        let botao = document.createElement("button")
        botao.innerText = 'Sair'
        texto.appendChild(botao)
        botao.onclick = sair
    }

    

}

function sair() {
    alert("Você saiu")
    texto.innerHTML = 'Saiu'
}

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    
    if(media < 7) {
        console.log("Reprovou")
    } else if(media >= 7) {
        console.log("Passou")
    }

}

function aluno(nome, curso) {
    let mensagem = `Seja bem vido ao curso de ${curso}, ${nome} !`
    console.log(mensagem)
}