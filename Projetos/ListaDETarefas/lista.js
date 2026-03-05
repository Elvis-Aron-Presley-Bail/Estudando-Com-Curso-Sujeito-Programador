let tarefa
let tarefas

function registrar() {

    tarefa = document.querySelector("#tarefa").value
    tarefas = document.querySelector("#tarefas")

    let novaTarefa = document.createElement('li')
    novaTarefa.textContent = tarefa
    tarefas.appendChild(novaTarefa)

    let remover = document.createElement('button')
    remover.textContent = 'Remover'
    remover.setAttribute(novaTarefa.removeA)
    novaTarefa.appendChild(remover)

}