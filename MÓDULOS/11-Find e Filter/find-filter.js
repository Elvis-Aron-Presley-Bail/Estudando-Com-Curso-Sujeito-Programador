//FIND

let lista = [5, 2, 98, 'João', 78, 'Pedro']

let busca = lista.find((elemento) => {
    if(elemento === 'João') {
        return elemento
    }
})

console.log(busca)