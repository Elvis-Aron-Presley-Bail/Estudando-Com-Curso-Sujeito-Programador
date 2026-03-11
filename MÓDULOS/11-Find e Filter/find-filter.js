//FIND = Devolve o primeiro que encontra

let lista = [5, 2, 98, 'João', 78, 'Pedro']

let busca = lista.find((elemento) => {
    if(elemento === 'joao') {
        return elemento
    } else {
        return console.log('Elemento não encontrado')
    }
})

console.log(busca)


//FILTER = Devolve tudo que encontrar

let nomes = ['Joao', 'Pedro', 'Ana', 'Paulo']

let encontrar = nomes.filter((nome) => {
    return nome.length <= 4
})

console.log(encontrar)

