let tarefa = document.querySelector("#todo input")
let tarefas = document.querySelector("#todo ul")
let botao = document.querySelector("#todo button")

let listaTarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || []

function listarTarefas() {
    tarefas.textContent = ''

    listaTarefas.map((lerTarefa) => {
        let elementoLi = document.createElement('li')

        let botaoRemover = document.createElement("a")

        let textoBtnRemover = document.createTextNode("Remover")

        elementoLi.textContent = lerTarefa
        tarefas.appendChild(elementoLi)
        botaoRemover.setAttribute('href', '#')
        botaoRemover.appendChild(textoBtnRemover)
        elementoLi.appendChild(botaoRemover)

        let posicao = listaTarefas.indexOf(lerTarefa)

        botaoRemover.setAttribute("onclick", `removerUmaTarefa(${posicao})`)

    })

}

listarTarefas()

function adicionarTarefa() {
    if(tarefa.value === '') {
        alert("Insira alguma tarefa")
        return false
    } else {
        listaTarefas.push(tarefa.value)
    }

    listarTarefas()
    salvarDados()

    tarefa.value = ''
}

botao.onclick = adicionarTarefa

function removerUmaTarefa(posicao) {
    listaTarefas.splice(posicao, 1)
    listarTarefas()
    salvarDados()
}

function salvarDados() {
    localStorage.setItem('@listaTarefas', JSON.stringify(listaTarefas))
}