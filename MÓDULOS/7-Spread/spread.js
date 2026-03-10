//Spread Operator em Array

let primeiros = [1, 2, 3]

let numeros = [...primeiros, 9, 13, 17]

console.log(numeros)


//Spread Operator em Objeto

let pessoa = {
    nome: 'Pedro',
    idade: 34,
    profissao: 'Programador'
}

let novaPessoa = {
    ...pessoa,
    sobrenome: 'Lucas',
    cidade: 'Curitiba',
}

console.log(novaPessoa)


//Spread Operator em Objeto dentro de Função

function novoUsuario(informacoes) {
    let dados = {
        ...informacoes,
        codigo: 123,
        dia: '10/03/2026'
    }

    console.log(dados)
}

novoUsuario({
    nome: 'Elvis',
    sobrenome: 'Bail',
    idade: 20
})